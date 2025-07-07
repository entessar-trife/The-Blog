import cover_1 from "../assets/images/BlogCovers/cover_1.png"
import cover_2 from "../assets/images/BlogCovers/cover_2.png"
import cover_3 from "../assets/images/BlogCovers/cover_3.png"
import cover_4 from "../assets/images/BlogCovers/cover_4.png"
import cover_5 from "../assets/images/BlogCovers/cover_5.png"
import cover_6 from "../assets/images/BlogCovers/cover_6.png"
import cover_7 from "../assets/images/BlogCovers/cover_7.png"
import cover_8 from "../assets/images/BlogCovers/cover_8.png"
import cover_9 from "../assets/images/BlogCovers/cover_9.png"
import cover_10 from "../assets/images/BlogCovers/cover_10.png"

import exampleImg_1 from "../assets/images/BlogDetails/image_1.png"
import exampleImg_2 from "../assets/images/BlogDetails/image_2.png"
import exampleImg_3 from "../assets/images/BlogDetails/image_3.png"
import exampleImg_4 from "../assets/images/BlogDetails/image_4.png"
import exampleImg_5 from "../assets/images/BlogDetails/image_5.png"
import exampleImg_6 from "../assets/images/BlogDetails/image_6.png"

import benefitsImg from "../assets/images/BlogDetails/image_7.png"
import settingUpImg_1 from "../assets/images/BlogDetails/image_8.png"
import settingUpImg_2 from "../assets/images/BlogDetails/image_9.png"


export interface Categories {
    categoryName: string;
    categoryStyle: string
}

export interface content {
    definition_1: string;
    img_1: string;
    content_1: string[],
    content_2: string[],
    contentTitle: string;
    img_2: string;
    definition_2: string;
}

export interface examples {
    exampleTitle: string;
    exampleDesc_1: string;
    exampleLink: string;
    exampleDesc_2: string;
    exampleImg: string;
    exampleImgDesc: string;
}

export interface benefits {
    benefits: string[];
    benefitsImg: string;
    definition: string;
    desc: string;
}

export interface choosingAndSettingUp {
    desc: string;
    title_1: string;
    desc_1: string;
    title_2: string;
    desc_2: string;
    title_3: string;
    desc_3: string;
    title_4: string;
    desc_4: string;
    settingUpImg_1: string;
    settingUpImg_2: string;
    definition_1: string;
    definition_2: string;
}

export interface PostsData {
    id?: number;
    onClick?: () => void;
    aos?: string;
    cardStyle?: string;
    mainImg: string;
    mainImgStyle?: string;
    date?: string;
    title: string;
    titleSize?: string;
    desc_1?: string;
    desc_2?: string;
    categories?: Categories[];
    content?: content[];
    examples?: examples[];
    benefits?: benefits[];
    choosingAndSettingUp?: choosingAndSettingUp[];
    Conclusion?: string;
}

export const posts: PostsData[] = [
    {
        id: 1,
        mainImg: cover_1,
        date: "Alec Whitten • 1 Jan 2023",
        title: "Bill Walsh leadership lessons",
        desc_1: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Leadership",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Management",
                categoryStyle: "text-gray-05 bg-gray-06"
            },
        ],

        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 2,
        mainImg: cover_2,
        date: "Demi WIlkinson • 1 Jan 2023",
        title: "PM mental models",
        desc_1: "Mental models are simple expressions of complex processes or relationships.",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Product",
                categoryStyle: "text-blue-03 bg-blue-04"
            },
            {
                categoryName: "Research",
                categoryStyle: "text-blue-01 bg-blue-02"
            },
            {
                categoryName: "Frameworks",
                categoryStyle: "text-red-01 bg-red-02"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 3,
        mainImg: cover_3,
        date: "Candice Wu • 1 Jan 2023",
        title: "What is Wireframing?",
        desc_1: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Design",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Research",
                categoryStyle: "text-blue-01 bg-blue-02"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 4,
        mainImg: cover_4,
        date: "Natali Craig • 1 Jan 2023",
        title: "How collaboration makes us better designers",
        desc_1: "Col,laboration can make our teams stronger, and our individual designs better.",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Design",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Research",
                categoryStyle: "text-blue-01 bg-blue-02"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 5,
        mainImg: cover_5,
        date: "Drew Cano • 1 Jan 2023",
        title: "Our top 10 Javascript frameworks to use",
        desc_1: "JavaScript frameworks make development easy with extensive features and functionalities.",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Software Development",
                categoryStyle: "text-green-01 bg-green-02"
            },
            {
                categoryName: "Tools",
                categoryStyle: "text-pink-01 bg-pink-02"
            },
            {
                categoryName: "SaaS",
                categoryStyle: "text-red-01 bg-red-02"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 6,
        mainImg: cover_6,
        date: "Orlando Diggs • 1 Jan 2023",
        title: "Podcast: Creating a better CX Community",
        desc_1: "Starting a community doesn’t need to be complicated, but how do you get started?",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Podcasts",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Customer Success",
                categoryStyle: "text-gray-05 bg-gray-06"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 7,
        mainImg: cover_3,
        date: "Candice Wu • 1 Jan 2023",
        title: "What is Wireframing?",
        desc_1: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Design",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Research",
                categoryStyle: "text-blue-01 bg-blue-02"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 8,
        mainImg: cover_5,
        date: "Drew Cano • 1 Jan 2023",
        title: "Our top 10 Javascript frameworks to use",
        desc_1: "JavaScript frameworks make development easy with extensive features and functionalities.",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Software Development",
                categoryStyle: "text-green-01 bg-green-02"
            },
            {
                categoryName: "Tools",
                categoryStyle: "text-pink-01 bg-pink-02"
            },
            {
                categoryName: "SaaS",
                categoryStyle: "text-red-01 bg-red-02"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 9,
        mainImg: cover_1,
        date: "Alec Whitten • 1 Jan 2023",
        title: "Bill Walsh leadership lessons",
        desc_1: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Leadership",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Management",
                categoryStyle: "text-gray-05 bg-gray-06"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 10,
        mainImg: cover_6,
        date: "Orlando Diggs • 1 Jan 2023",
        title: "Podcast: Creating a better CX Community",
        desc_1: "Starting a community doesn’t need to be complicated, but how do you get started?",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Podcasts",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Customer Success",
                categoryStyle: "text-gray-05 bg-gray-06"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 11,
        mainImg: cover_3,
        date: "Alec Whitten • 1 Jan 2023",
        title: "Bill Walsh leadership lessons",
        desc_1: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Leadership",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Management",
                categoryStyle: "text-gray-05 bg-gray-06"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 12,
        mainImg: cover_9,
        date: "Alec Whitten • 1 Jan 2023",
        title: "Bill Walsh leadership lessons",
        desc_1: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Leadership",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Management",
                categoryStyle: "text-gray-05 bg-gray-06"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },


    {
        id: 13,
        mainImg: cover_8,
        date: "Phoenix Baker • 1 Jan 2023",
        title: "Migrating to Linear 101",
        titleSize: "text-lg",
        desc_1: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Design",
                categoryStyle: "text-blue-01 bg-blue-02"
            },
            {
                categoryName: "Research",
                categoryStyle: "text-pink-01 bg-pink-02"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },


    {
        id: 14,
        mainImg: cover_4,
        date: "Natali Craig • 1 Jan 2023",
        title: "How collaboration makes us better designers",
        desc_1: "Collaboration can make our teams stronger, and our individual designs better.",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Design",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Research",
                categoryStyle: "text-blue-01 bg-blue-02"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 15,
        mainImg: cover_6,
        date: "Orlando Diggs • 1 Jan 2023",
        title: "Podcast: Creating a better CX Community",
        desc_1: "Starting a community doesn’t need to be complicated, but how do you get started?",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Podcasts",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Customer Success",
                categoryStyle: "text-gray-05 bg-gray-06"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 16,
        mainImg: cover_1,
        date: "Alec Whitten • 1 Jan 2023",
        title: "Bill Walsh leadership lessons",
        desc_1: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Leadership",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Management",
                categoryStyle: "text-gray-05 bg-gray-06"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 17,
        mainImg: cover_7,
        date: "Olivia Rhye • 1 Jan 2023",
        title: "UX review presentations",
        desc_1: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Design",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Research",
                categoryStyle: "text-blue-01 bg-blue-02"
            },
            {
                categoryName: "Presentation",
                categoryStyle: "text-pink-01 bg-pink-02"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 18,
        mainImg: cover_8,
        date: "Phoenix Baker • 1 Jan 2023",
        title: "Migrating to Linear 101",
        titleSize: "text-lg",
        desc_1: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Design",
                categoryStyle: "text-blue-01 bg-blue-02"
            },
            {
                categoryName: "Research",
                categoryStyle: "text-pink-01 bg-pink-02"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },

    {
        id: 19,
        mainImg: cover_9,
        date: "Lana Steiner • 1 Jan 2023",
        title: "Building your API Stack",
        titleSize: "text-lg",
        desc_1: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Design",
                categoryStyle: "text-green-01 bg-green-02"
            },
            {
                categoryName: "Research",
                categoryStyle: "text-pink-01 bg-pink-02"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ],
        benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."

    },

    {
        id: 20,
        mainImg: cover_10,
        date: "Olivia Rhye • 1 Jan 2023",
        title: "Grid system for better Design User Interface",
        desc_1: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
        desc_2: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        categories: [
            {
                categoryName: "Design",
                categoryStyle: "text-purple-01 bg-purple-02"
            },
            {
                categoryName: "Interface",
                categoryStyle: "text-pink-01 bg-pink-02"
            },
        ],
        content: [{
            definition_1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
            img_1: exampleImg_1,
            content_1: [
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            ],
            contentTitle: "Breaking Down the Grid",
            content_2: [
                "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
                "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
                "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            ],
            img_2: exampleImg_2,
            definition_2: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        }],
        examples: [
            {
                exampleTitle: "Example 1: Hierarchical Grid",
                exampleDesc_1: "Our first example is from .",
                exampleLink: "The New York Times",
                exampleDesc_2: "This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                exampleImg: exampleImg_3,
                exampleImgDesc: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 2: Column Grid",
                exampleDesc_1: "Our second example is from ",
                exampleLink: "Ritual.com, ",
                exampleDesc_2: "a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                exampleImg: exampleImg_4,
                exampleImgDesc: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 3: Modular Grid",
                exampleDesc_1: "Our third example is from ,",
                exampleLink: "Behance",
                exampleDesc_2: " a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                exampleImg: exampleImg_5,
                exampleImgDesc: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
            {
                exampleTitle: "Example 4: Breaking the Grid",
                exampleDesc_1: "Our last example is .",
                exampleLink: "Shrine from Google’s Material Studies",
                exampleDesc_2: "This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                exampleImg: exampleImg_6,
                exampleImgDesc: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
            },
        ], benefits: [{
            benefits: [
                "Designers can quickly put together well-aligned interfaces.",
                "Users can easily scan predictable grid-based interfaces.",
                "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns",
            ],
            benefitsImg: benefitsImg,
            definition: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
            desc: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        }],
        choosingAndSettingUp: [{
            desc: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            title_1: "Choose the right grid for your needs.",
            desc_1: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            title_2: "Spend time setting up your grid. ",
            desc_2: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            settingUpImg_1: settingUpImg_1,
            definition_1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
            title_3: "Always place content within columns, not gutters. ",
            desc_3: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
            settingUpImg_2: settingUpImg_2,
            definition_2: "Content or elements should be placed within and across columns, not gutters.",
            title_4: "Consider using an 8px grid system.",
            desc_4: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
        }],
        Conclusion: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
    },
]
