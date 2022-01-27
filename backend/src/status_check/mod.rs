use either::*;
use neon::prelude::*;

fn get_status(url: &str) -> Either<bool, String> {
    match reqwest::blocking::Client::new().get(url).send() {
        Ok(_) => {
            return Left(true);
        }
        Err(e) => {
            return Right(format!("{}", e));
        }
    };
}

pub fn mojang_auth_status(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string(get_status("https://authserver.mojang.com").right_or_default()))
}

pub fn mojang_session_status(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string(get_status("https://sessionserver.mojang.com").right_or_default()))
}

pub fn mojang_texture_status(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string(get_status("https://textures.minecraft.net").right_or_default()))
}
