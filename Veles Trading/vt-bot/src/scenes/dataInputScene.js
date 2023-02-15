import { Markup, Scenes } from "telegraf";
import { Commands } from "../consts/Commands";
import { SceneNames } from "../consts/SceneNames";

export const dataInputScene = new Scenes.BaseScene(SceneNames.DATA_INPUT_SCENE);

const dataInputMenu = Markup.keyboard([
  [Markup.button.callback(Commands.Common.GO_BACK)],
]).resize();

dataInputScene.enter(ctx => {
  ctx.reply(`Please enter the amount of ${ctx.scene.session.state.currency} to exchange`, dataInputMenu);
});

dataInputScene.hears(Commands.Common.GO_BACK, ctx => {
  ctx.scene.enter(SceneNames.MAIN_SCENE);
});

dataInputScene.use((ctx) => {
  const value = Number(ctx.message.text.replace(/,/, '.'));
  if(!isNaN(value) && value > 0 && value < 10e10 && ctx.message.text.match(/^[0-9]+([.,]?[0-9]+)?$/)) {
    ctx.scene.enter(SceneNames.CHANGE_SCENE, {currency: ctx.scene.session.state.currency, value});
  } 
  else {
    ctx.reply(`Invalid value. Please enter a positive number. ` + 
      `Use a dot or comma for floating point numbers`, dataInputMenu);
  }
});

