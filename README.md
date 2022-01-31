# RustMine

[![wakatime](https://wakatime.com/badge/user/32a4f5e7-c047-422a-9e96-26bc31c49a33/project/dfe86c46-be66-418b-93c4-28d77f5ff24b.svg)](https://wakatime.com/badge/user/32a4f5e7-c047-422a-9e96-26bc31c49a33/project/dfe86c46-be66-418b-93c4-28d77f5ff24b)
[![CodeFactor](https://www.codefactor.io/repository/github/sourtaste000/rustmine/badge)](https://www.codefactor.io/repository/github/sourtaste000/rustmine)
[![CI](https://github.com/sourTaste000/RustMine/actions/workflows/main.yml/badge.svg?style=flat-square)](https://github.com/sourTaste000/RustMine/actions/workflows/main.yml)

A Minecraft launcher written in Rust, with an Electron frontend.

---

## Why?

I thought it would be fun to use two of my most familiar languages, Rust and
JavaScript, to create a Minecraft launcher. I will most likely to _not_ finish
this program, since I only did this for fun.

I will create the UI using [Electron](https://www.electronjs.org/) and I will
use Rust with [Neon Bindings](https://neon-bindings.com/).

---

## Roadmap

- [ ] Frontend
  - [ ] Main Page
- [ ] Backend
  - [ ] Mojang Login
  - [ ] Microsoft Login
  - [ ] Download Libraries
  - [ ] Download `minecraft.jar`
  - [ ] Authenticating
  - [ ] Launching Minecraft
- [ ] Extra Stuff
  - [ ] Multiple Instances
  - [ ] Instance Specific Settings
  - [ ] Multiple Accounts
  - [x] Mojang Status
  - [ ] Auto Update
  - [ ] Integrate with
        [mod-updater](https://github.com/sourTaste000/mod-updater/)
  - [x] Animate Splash Screen

---

## Development

1. Clone this repository.
2. Run `yarn` to install the dependencies for the frontend.
3. Then, run `yarn` inside the `backend` folder to install the dependencies for
   the backend.
4. Run `yarn dev` in the root folder of this project to start the app.

---

## What if I am religiously opposed to using Electron?

[TL;DR](https://youtu.be/jyTA33HQZLA?t=95)

<details>
Then you are not the target audience of this program. See
[PolyMC](https://github.com/PolyMC/PolyMC) for a similar program that will not
taint your machine with a library you happen to dislike.

It's clear that highly polarized opinions about languages and frameworks are
characteristic of people who lack real-world programming experience and are more
interested in building an identity than creating computer programs. When pressed
for reasons what exactly is so bad about Electron, they can rarely offer
anything than vaguely mumbled "memory usage" or "b-but it's an entire browser"
(both of which have not been true for years, for example Electron's memory usage
has improved dramatically, but the meme stuck). The programming world is filled
with people who read angry rants about why library X or Y sucks and you should
hate it, then repeat whatever they remember because they think whining makes
them seem smart, without critically examining whether it makes sense or not.
</details>

## The reasons behind Electron

<details>
- It's fun to develop for
- It uses as much resources as a single browser tab, if used in a sane way
- It provides a low barrier to entry for contributors
- It lets us easily build and deploy to all major desktop platforms (various
  Linux distros, MacOS, Windows)
- There is no good alternative that would provide all these benefits (don't get
  me started on qt - try using their designer)
- The users don't care about the technology you use to build your app

With experience comes a certain appreciation of tradeoffs you take when building
software and while Electron is not the perfect solution for every use case, it's
certainly good enough for what I was trying to achieve with this app.
</details>

---

## License

RustMine, a Minecraft launcher written in Rust, with an Electron frontend.
Copyright (C) 2022 sourTaste000

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along
with this program. If not, see <https://www.gnu.org/licenses/>.
