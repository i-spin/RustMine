# RustMine

A Minecraft launcher written in Rust, with an Electron frontend.

## Why???

I thought it would be fun to use two of my most familiar languages, Rust and
JavaScript, to create a Minecraft launcher. I will most likely to _not_ finish
this program, since I only did this for fun.

## What's the plan?

I will create the UI using [Electron](https://electron.io). For the backend
actions, such as downloading libraries, listing versions, etc, I will use Rust
with [Neon Bindings](https://neon-bindings.com/).

## Development

1. Clone this repository.
2. Run `yarn .` to install the dependencies for the frontend.
3. Then, run `yarn .` inside the `backend` folder to install the dependencies
   for the backend.
4. Build the backend by running `yarn build-release` inside the `backend`
   folder.
5. Run `yarn dev` to start the frontend.

## What if I am religiously opposed to using Electron?

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

## The reasons behind Electron

- It's fun to develop for
- It uses as much resources as a single browser tab, if used in a sane way
- It provides a low barrier to entry for contributors
- It lets us easily build and deploy to all major desktop platforms (various
  Linux distros, MacOS, Windows)
- It lets us use React for managing the GUI
- There is no good alternative that would provide all these benefits (don't get
  me started on qt - try using their designer)
- The users don't care about the technology you use to build your app

With experience comes a certain appreciation of tradeoffs you take when building
software and while Electron is not the perfect solution for every use case, it's
certainly good enough for what I was trying to achieve with this app.

### Why not tauri???

[*](https://youtu.be/jyTA33HQZLA?t=95)
