mod auth;
mod status_check;
mod structs;

use crate::status_check::*;
use crate::auth::*;
use neon::prelude::*;

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("mojangAccountStatus", mojang_auth_status)?;
    cx.export_function("mojangSessionStatus", mojang_session_status)?;
    cx.export_function("mojangTextureStatus", mojang_texture_status)?;
    cx.export_function("authenticate",auth_mojang)?;
    cx.export_function("invalidate",invalidate)?;
    Ok(())
}
