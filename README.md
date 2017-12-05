## Doppler

A coding challenge to recreate a doppler slide.

# To run
This repository uses webpack and webpack-dev-server to build and serve the files.
`npm install`
`npm run start`

# challenges
  - Responsiveness: turns out chrome dev tools does not work well with the browser-standard range input, I had to use nw-react-slider to get around this issue. Luckily, it also is easier to customize with css.
  - Logarithmic mapping: the instructions were unclear about how the mapping should function, so I used a mapping function from our friends at mathematics stack overflow. I'm unclear of the expectation. Technically, the slider offers more granular precision towards the ends of the spectrum (which translates into more decimal precision); however the color changes less; meaning you have more control over the numbers and the colors towards the end of the spectrum.
  - Structure: I at first broke out the inputs into their own components each one including their own css, however it felt like a lot more navigational/conceptual effort than it was worth. The version I settled on offers more clarity for someone reading the code than does splitting them into their own module/s. Also, the module itself is less than 100 lines; so it's pretty tiny.


