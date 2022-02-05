use neon::prelude::*;

fn get_status(url: &str) -> String {
    match reqwest::blocking::Client::new().get(url).send() {
        Ok(_) => {
            return String::new();
        }
        Err(e) => {
            return format!("{}", e).into();
        }
    };
}

pub fn mojang_auth_status(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string(get_status("https://authserver.mojang.com")))
}

pub fn mojang_session_status(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string(get_status("https://sessionserver.mojang.com")))
}

pub fn mojang_texture_status(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string(get_status("https://textures.minecraft.net")))
}
