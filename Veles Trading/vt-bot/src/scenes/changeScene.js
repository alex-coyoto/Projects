import { Markup, Scenes } from "telegraf";
import { Commands } from "../consts/Commands";
import { Currencies } from "../consts/Currencies";
import { SceneNames } from "../consts/SceneNames";
import PriceHelper from "../utils/PriceHelper";

export const changeScene = new Scenes.BaseScene(SceneNames.CHANGE_SCENE);

const payMenu = Markup.keyboard([
  [Markup.button.callback(Commands.ChangeScene.CHANGE)],
  [Markup.button.callback(Commands.Common.GO_BACK), Markup.button.callback(Commands.ChangeScene.CANCEL)],
]).resize();

const priceMessage = ctx => {
  const currentValue = ctx.scene.session.state.value;
  const currentCurrency = ctx.scene.session.state.currency;
    PriceHelper.getCource()
      .then(
        price => ctx.reply(`Current BTC/USDT rate is ${PriceHelper.formatPrice(price)}.\n` +
          `Exchanging ${PriceHelper.formatPrice(currentValue)} ${currentCurrency} you will receive ` + 
            `${currentCurrency === Currencies.BTC
                ? PriceHelper.formatPrice(PriceHelper.convertBtcToUsdt(currentValue, price)) + ` ${Currencies.USDT}` 
                  : PriceHelper.formatPrice(PriceHelper.convertUsdtToBtc(currentValue, price)) + ` ${Currencies.BTC}`
              }`,
          payMenu),
        async _ => {
          await ctx.reply('Something went wrong on the server. Try again later');
          ctx.scene.enter(SceneNames.MAIN_SCENE);
        });
}

changeScene.enter(ctx => {
  priceMessage(ctx);
});

changeScene.hears(Commands.ChangeScene.CHANGE, async ctx => {
  await ctx.reply('The exchange was successful!');
  ctx.scene.enter(SceneNames.MAIN_SCENE);
});
changeScene.hears(Commands.Common.GO_BACK, ctx => {
  ctx.scene.enter(SceneNames.DATA_INPUT_SCENE, {currency: ctx.scene.session.state.currency});
});
changeScene.hears(Commands.ChangeScene.CANCEL, ctx => {
  ctx.scene.enter(SceneNames.MAIN_SCENE);
});

changeScene.use(ctx => {
  priceMessage(ctx);
});