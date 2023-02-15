import { Scenes, session, Telegraf } from "telegraf";
import { SceneNames } from "./consts/SceneNames.js";
import { changeScene } from "./scenes/ChangeScene";
import { dataInputScene} from "./scenes/dataInputScene";
import { mainScene } from "./scenes/mainScene";

export const start = () =>{
    const bot = new Telegraf(process.env.BOT_API_TOKEN);
    const stage = new Scenes.Stage([mainScene, dataInputScene, changeScene]);

    bot.use(session());
    bot.use(stage.middleware());

    bot.start(async ctx => {
        await ctx.reply(`Hi ${ctx.from.first_name ?? "user"}!`);
        ctx.scene.enter(SceneNames.MAIN_SCENE);
    });

    bot.on("text", async ctx => {
        ctx.scene.enter(SceneNames.MAIN_SCENE);
    });

    bot.launch();
}
