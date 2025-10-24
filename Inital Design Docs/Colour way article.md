Creating a consistent color palette for your interface
Alexandra Basova
Alexandra Basova

Follow
6 min read
·
Oct 24, 2024
764


6





I really like design systems, which is why I actively engage in constructing or enhancing them in every product I am involved with. In most products, the color palette appeared quite disorganized, and I have an idea why.

The intuitive approach is to gradually incorporate these colors as needed, step by step. If I require a grey shade for the secondary texts, I simply add it. Similarly, if I need a lighter grey for the icons, I add that too.
Now, I require a grey color to outline the text fields. However, this particular grey is too dark for separators. It starts to snowball, and at some point, the colors spiral out of control, leading to a loss of system coherence. Familiar situation?

Press enter or click to view image in full size
A crowd of gray colors appears in random order, creating a mess.
In fact, the process of working with colors is very similar across all interfaces, no matter how different they may be. In each standard interface, we require:

Black colors 🖤 for primary texts and icons.
Grey shades 🩶 for secondary texts, icons, and strokes.
An accent color 💙 for buttons and other clickable elements.
Red ❤️, green 💚, and orange 🧡 for negative, positive, and warning states.
White 🤍 for surfaces and elements on an accent or dark background.
Plus, a few extra colors 🩵 💜 🩷 💛 for charts or badges.
Press enter or click to view image in full size
Interface elements and the colors used in the UI elements
I highly recommend preparing shade palettes for each color before embarking on the interface design process. I’ll showcase the method we implemented at Aloha Browser, hoping you find it valuable.

Palette Creation
I typically begin with the accent color. Often it is a brand color that gives our interface a distinctive look. Most likely, we will need shades of this color. Let’s prepare them.

Press enter or click to view image in full size
Shades of blue color made from the main accent color
To ensure a smooth transition between shades and maintain consistency in tone, let’s use a gradient. It’s an excellent technique I picked up from my former colleague.

You don’t have to begin with #000000 and end with #ffffff in your gradients. Utilize colors that you intend to use in the interface.

Press enter or click to view image in full size
A blue color gradient: from light to dark with the accent color in the center
Now, divide the gradient into 9 equal segments and move the gradient endpoints to the center of the first and last segments.

Press enter or click to view image in full size
The blue color gradient is split into 9 segments
Pick the central shade from each segment, and you’ll have your initial palette.

Press enter or click to view image in full size
A color palette created from the gradient segments.
Occasionally, using shades of the same tone in the interface may appear dull. Take a look, if you make the lighter shades warmer, the overall appearance becomes more lively.

Press enter or click to view image in full size
A notification with a cold light blue color and a notification with a warm blue color.
Don’t be afraid to change the shades of the gradient’s endpoints if you want to make the palette more varied. In this example, I make the dark color more purple and the light color more green.

Press enter or click to view image in full size
A blue color gradient with adjusted end colors: the dark color has become more purple, and the light color has become warmer.
You may notice that certain colors don’t look quite satisfactory. By introducing extra points to the gradient and adjusting the brightness, your palette remains accurate, but all the colors now look impeccable!

Press enter or click to view image in full size
The blue garadient with ajusted light blue color
Creating more palettes
Once you are happy with your accent color, employ the same approach to create palettes for red, green, and orange colors.

Press enter or click to view image in full size
Blue palette and related gradient split into 9 segments.
Don’t forget that orange becomes muddy if you darken it through black. Add a touch of red to make the orange darker.

Press enter or click to view image in full size
Red, green, and orange palettes consisting of 9 shades each.
Black, Grey and White palettes
Once you are satisfied with these initial colors, shift your focus to the blacks and greys. Now you are able to select the appropriate tone for your texts and strokes.

Press enter or click to view image in full size
Basic gray and black colors are created as shades of blue.
I would recommend splitting black, grey, and white palettes, even if they consist of just shades of the same color. Interfaces typically require a variety of greys and blacks, especially when supporting a dark mode.
Hence, it would be more convenient if you separate them into distinct palettes. Additionally, this will significantly facilitate the use of transparent shades, which we will discuss later.

Press enter or click to view image in full size
Black, grey and wthite palettes
Even if you don’t plan to use the ultimate black color #000000 in your interface, I recommend adding it to your palette. It might be necessary for the background of a video player or image gallery.

Press enter or click to view image in full size
Video player interface with a deep black background.
Transparent Colors
Until now, we’ve only discussed solid opaque colors. However, there are often cases where we need colors with transparency, such as for overlays or various visual effects.

Press enter or click to view image in full size
Video player interface with a toolbar featuring a gray transparent background.
In most cases, these are transparent shades of black and white.
If you require transparent elements of a vibrant color, select a certain shade of it and add it to the palette with varying levels of transparency.

Press enter or click to view image in full size
Black and white palettes with transparent colors
Vibrant Colors in Dark Mode
If you are implementing dark mode in your interface, establish distinct palettes for vibrant colors with reduced brightness. The black and grey palettes will work seamlessly for both dark and light modes.

Press enter or click to view image in full size
Blue palette in light and dark modes
Additional Colors
At Aloha, we are passionate about colors! We use additional colors for charts and badges. While we don’t necessarily need a variety of shades for these hues, we’ve decided to gather them into a single palette.

Press enter or click to view image in full size
A palette of additional vibrant colors in light and dark modes
Utilizing Color Palettes
Now it’s time to integrate our colors into the interface. First, we will assign names to our colors. Within each palette, we will assign numbers to the shades ranging from 100 to 900.

Press enter or click to view image in full size
Green palette in dark and light modes
Why this instead of 1, 2, 3…? This approach enables us to insert as many shades in between as needed, such as 550, 575, or 950, 975, and so on.

Press enter or click to view image in full size
New color Green.550 in the green palette appearing between Green.500 and Green.600
Congratulations! We’ve established our core palette. Envision it as the paint set for your interface. As the next step, we will establish some guidelines for using these colors in the interface to prevent chaos in this array of hues. In my upcoming article, we will delve into understanding our palettes and introduce a semantic layer.