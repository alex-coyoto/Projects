import { Markup, Scenes } from "telegraf";
import { Commands } from "../consts/Commands.js";
import { Currencies } from "../consts/Currencies.js";
import { SceneNames } from "../consts/SceneNames.js";
import PriceHelper from "../utils/PriceHelper";

export const mainScene = new Scenes.BaseScene(SceneNames.MAIN_SCENE);

const mainMenu = Markup.keyboard([
    [Markup.button.callback(Commands.MainScene.GET_COURCE)],
    [Markup.button.callback(Commands.MainScene.BTC_TO_USDT), 
        Markup.button.callback(Commands.MainScene.USDT_TO_BTC)],
]).resize();

mainScene.enter(ctx => {
    return ctx.reply(`What can I do for you?`, mainMenu);
  });

mainScene.hears(Commands.MainScene.GET_COURCE, ctx => {
    PriceHelper.getCource()
        .then(
            price => ctx.reply(`Current BTC/USDT rate is ` +  
                `<b>${PriceHelper.formatPrice(price)}</b>`, {parse_mode: 'HTML'}),
            _ => ctx.reply('Something went wrong on the server. Try again later'));
  });
mainScene.hears(Commands.MainScene.BTC_TO_USDT, ctx => {
    ctx.scene.enter(SceneNames.DATA_INPUT_SCENE, {currency: Currencies.BTC});
  });
mainScene.hears(Commands.MainScene.USDT_TO_BTC, ctx => {
    ctx.scene.enter(SceneNames.DATA_INPUT_SCENE, {currency: Currencies.USDT});
});

mainScene.help(ctx => ctx.reply("Application for tracking BTC/USDT rate. Choose a command from the menu", mainMenu));
mainScene.use(ctx => ctx.reply("Type /help to get information about commands"));