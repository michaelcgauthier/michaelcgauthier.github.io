window.PROJECTS = [
  {
    id: "inspection-sketches",
    title: "Automated CAD and GIS conversion of hand drawn inspection sketches",
    kicker: "Python automation",
    cover: "assets/images/all/project1.jpeg",
    hero: "assets/images/all/project1.jpeg",
    preview: "Python OCR workflow converting scanned inspection sketches into vector linework and structured inspection records used for drafting and contractor reference.",
    tags: ["Python", "OCR", "AutoCAD", "ArcGIS", "Georeferencing"],
    intro: "Converted scanned utility inspection checklists and sketches into organized vector geometry with extracted metadata so engineers could start from clean digital records instead of paper drawings.",
    what: [
      "Converted scanned inspection sketches into CAD and GIS vector linework",
      "Extracted inspection fields such as address, inspector info, pipe size, pipe material, and notes",
      "Created clean digital geometry that can be used as a drafting starting point"
    ],
    how: [
      "Used OCR to read text fields from scanned inspection PDFs",
      "Converted hand drawn sketch geometry into vector based linework",
      "Attached extracted fields as attributes or comments",
      "Aligned output using address and nearby mapped features"
    ],
    results: [
      "Converted dozens of sketches into organized CAD and GIS linework",
      "Improved consistency and readability versus paper sketches",
      "Reduced initial drafting time by about 50 percent based on a before and after time study"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "The engineering office had hundreds of scanned utility inspection forms containing checklist items, inspector information, addresses, measurements, and hand drawn sketches. These sketches document utilities and reference ties to surrounding features so they can be found years later.",
          "My supervisor originally asked me to manually recreate these drawings in AutoCAD. Since there were hundreds of forms, I built a Python workflow to convert the paper sketches into usable CAD and GIS linework."
        ]
      },
      {
        title: "What I built",
        paragraphs: [
          "I wrote a Python program that scans inspection PDFs, uses OCR to extract key fields, identifies the sketch region, and converts sketch geometry into vector based linework.",
          "The workflow reads fields such as address, inspection data, pipe size, pipe material, and inspector name, then attaches that information to the resulting geometry for long term reference."
        ]
      },
      {
        title: "Results",
        paragraphs: [
          "The workflow produced cleaner and more consistent digital records than the original hand sketches. It also reduced the time required to start drafting because engineers could begin from vector geometry instead of manually tracing paper drawings."
        ]
      }
    ]
  },

  {
    id: "arcgis-inspections",
    title: "Digital field inspection system with ArcGIS mobile data collection",
    kicker: "Workflow design",
    cover: "assets/images/all/project2.jpeg",
    hero: "assets/images/all/project2.jpeg",
    preview: "Survey123 and Field Maps system replacing paper inspection forms with offline field capture, mapped geometry, photos, signatures, and standardized exports.",
    tags: ["ArcGIS", "Survey123", "Field Maps", "GIS"],
    intro: "Replaced paper inspection forms with a mobile GIS workflow so inspections are consistent, accessible, and available to engineers immediately after syncing.",
    what: [
      "Replaced paper inspection forms with phone and tablet workflows",
      "Captured checklist fields, photos, signatures, and mapped geometry",
      "Designed offline use and automatic syncing back to office systems"
    ],
    how: [
      "Built structured forms in Survey123",
      "Configured Field Maps for map based geometry and attributes",
      "Enabled offline saving and automatic upload on WiFi",
      "Set up exports matching the original form format"
    ],
    results: [
      "Reduced manual paperwork and scanning steps",
      "Improved consistency of inspection records",
      "Expanded the workflow to additional inspection types"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "The previous inspection workflow relied on paper checklists, handwritten notes, manual sketches, and physical signatures. Forms then had to be stored, scanned, organized, and found later.",
          "I designed a digital inspection workflow using Survey123 and Field Maps so field staff could capture structured data and map geometry and sync it automatically to office systems."
        ]
      },
      {
        title: "Results",
        paragraphs: [
          "The system improved convenience and consistency for inspections and reduced the number of steps required to get inspection data into a usable format for engineers."
        ]
      }
    ]
  },

  {
    id: "recycling-pond",
    title: "Recycling center pond redesign and 3D site model",
    kicker: "Survey and surface modeling",
    cover: "assets/images/all/project3.jpeg",
    hero: "assets/images/all/project3.jpeg",
    preview: "Operated total station for a full topographic survey, built a 3D surface model, developed three design options with profiles, and supported plan production and bid comparisons.",
    tags: ["Civil 3D", "Total station", "Contours", "Profiles", "Plan sets"],
    intro: "Topographic survey and redesign package for a detention pond that was not draining properly, including alternatives, profiles, and plan set production used for construction planning.",
    what: [
      "Investigated drainage issues and documented field conditions",
      "Collected more than 500 survey points and built a 3D surface model",
      "Designed three redesign options and produced plan sheets and profiles",
      "Supported bid cost tabulation and comparisons"
    ],
    how: [
      "Surveyed the full site with total station workflows over multiple days",
      "Built contours and surface in Civil 3D and ensured elevation datum consistency",
      "Created three design alternatives with plan views and profiles",
      "Produced presentation graphics for review"
    ],
    results: [
      "Delivered an existing conditions model and three design alternatives",
      "One option selected and advanced for construction planning",
      "Supported bidding and documentation workflows"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "A detention pond next to the recycling center was not functioning as intended. It collected debris and did not drain properly.",
          "I supported a redesign through field observation, topographic surveying, CAD surface modeling, design alternatives, profiles, and plan set production."
        ]
      }
    ]
  },

  {
    id: "cad-toolkit",
    title: "CAD base layers and imagery library for faster plan set starts",
    kicker: "CAD and GIS systems",
    cover: "assets/images/all/project4.jpeg",
    hero: "assets/images/all/project4.jpeg",
    preview: "Created georeferenced CAD utility base layers and orthophoto tiles so engineers can start designs with existing conditions already loaded.",
    tags: ["AutoCAD", "ArcGIS", "Georeferencing", "Orthophotos"],
    intro: "Built reusable CAD resources used across the office: town wide utility layers, orthophoto tiles, and elevation contour resources for faster existing conditions setup.",
    what: [
      "Built a town wide utility layer in CAD exported from GIS",
      "Created orthophoto tile library aligned to CAD coordinates",
      "Created elevation and contour resources for reference"
    ],
    how: [
      "Exported GIS layers and imported into CAD with coordinate alignment",
      "Created block based and point based variants",
      "Tiled orthophotos into manageable sizes with overlap",
      "Processed elevation information into usable references"
    ],
    results: [
      "Reduced drafting setup time by starting with existing conditions already loaded",
      "Improved consistency across plan sets"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "To help engineers start plan sets faster, I built reusable CAD base layers from GIS exports and created an ortho imagery tile library that drops into CAD at the correct coordinates."
        ]
      }
    ]
  },

  {
    id: "drainage-repair",
    title: "Drainage repair design using inspection footage and existing utilities",
    kicker: "Design options",
    cover: "assets/images/all/project5.jpeg",
    hero: "assets/images/all/project5.jpeg",
    preview: "Mapped existing utilities, reviewed robotic pipe inspection footage, created repair options, and supported a final design implemented by construction crews.",
    tags: ["AutoCAD", "Plan sets", "Utility coordination"],
    intro: "Reviewed inspection footage, built existing conditions in CAD, and produced repair options for a damaged drainage pipe section.",
    what: [
      "Documented a damaged pipe section causing sediment buildup and blockage",
      "Mapped existing utilities and existing conditions in CAD",
      "Developed repair options including patch and manhole concepts"
    ],
    how: [
      "Inserted existing utility context in CAD",
      "Reviewed inspection video and mapped outlets and break location",
      "Produced multiple repair concepts and drawings for review"
    ],
    results: [
      "Final concept selected and implemented in the field",
      "Improved maintenance access and reduced future risk of blockage"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "A damaged drainage pipe created a cavity and allowed soil to enter the system. I supported the repair plan by reviewing inspection footage, mapping existing conditions, and producing repair alternatives."
        ]
      }
    ]
  },

  {
    id: "materials-testing",
    title: "Mechanical and materials testing laboratory work",
    kicker: "Testing and validation",
    cover: "assets/images/all/project6.jpeg",
    hero: "assets/images/all/project6.jpeg",
    preview: "Instron tensile, bending, torsion, and impact testing with Bluehill plus MATLAB analysis and materials characterization methods.",
    tags: ["Instron", "Bluehill", "MATLAB", "Impact testing"],
    intro: "Hands on testing work across mechanics of materials and materials science including test setup, data collection, and MATLAB analysis.",
    what: [
      "Ran tensile, bending, torsion, compression, buckling, impact, and hardness tests",
      "Used Bluehill for test setup, control, and data export",
      "Calculated material properties and interpreted stress strain behavior"
    ],
    how: [
      "Configured and executed tests on Instron systems",
      "Processed results in MATLAB to compute properties and generate plots",
      "Compared impact energy across temperature conditions"
    ],
    results: [
      "Built comfort with test setup and interpreting mechanical behavior",
      "Produced lab reports, plots, and calculated properties"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "I have completed multiple lab sequences using Instron systems and Bluehill software. I collected data in real time and used MATLAB to generate plots and extract properties such as modulus, yield strength, and ultimate strength."
        ]
      }
    ]
  },

  {
    id: "clean-energy",
    title: "Clean energy exhibit with wind turbine and interactive game",
    kicker: "Design build test",
    cover: "assets/images/all/project7.jpeg",
    hero: "assets/images/all/project7.jpeg",
    preview: "Laser cut house, SolidWorks wind turbine, 3D printed parts, LEDs, MATLAB and Arduino game logic designed for repeated student use.",
    tags: ["SolidWorks", "Arduino", "MATLAB", "3D printing"],
    intro: "Designed an interactive exhibit teaching middle school students clean energy concepts using a physical model and programmed game logic.",
    what: [
      "Built an interactive exhibit teaching clean energy through hands on engagement",
      "Designed a wind turbine in CAD and 3D printed parts",
      "Programmed MATLAB and Arduino game logic tied to buttons and LEDs"
    ],
    how: [
      "Laser cut a house model and integrated LEDs",
      "Designed and printed a turbine that physically rotates",
      "Programmed a trivia style game with feedback"
    ],
    results: [
      "Reliable operation under repeated student use",
      "Strong feedback on design and execution"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "For a Northeastern exposition, I helped build a clean energy exhibit for visiting middle school students. The build included a wind turbine model, LED lighting, and a button based game driven by MATLAB and Arduino."
        ]
      }
    ]
  },

  {
    id: "ca-light",
    title: "CA Light Designs: custom LED product design and production",
    kicker: "Product development",
    cover: "assets/images/all/project8.jpeg",
    hero: "assets/images/all/project8.jpeg",
    preview: "Founded a custom engraved LED sign business, improved engraving hardware and workflow, built the website, and handled customer orders end to end.",
    tags: ["Product design", "Manufacturing", "Laser engraving", "Customer support"],
    intro: "Founded and ran a custom LED sign business including design, production, equipment improvements, online presence, and customer communication.",
    what: [
      "Designed and manufactured custom engraved LED signs",
      "Modified engraving setup to improve output and throughput",
      "Built a Wix website and ran online storefronts",
      "Handled customer communication and fulfillment"
    ],
    how: [
      "Created engraving designs and ran production workflow",
      "Improved machine performance through part and setup changes",
      "Marketed through web and social platforms"
    ],
    results: [
      "Over 200 sales",
      "Strong customer satisfaction and repeat direct orders"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "CA Light Designs was a custom engraved LED sign business I started and ran. I owned product design, production, machine improvements, website setup, and customer communication."
        ]
      }
    ]
  },

  {
    id: "clubs",
    title: "NU Electric Racing and NU Give a Hand",
    kicker: "Student engineering teams",
    cover: "assets/images/all/project9.jpeg",
    hero: "assets/images/all/project9.jpeg",
    preview: "Tire inertia reduction work for an electric race car plus prosthetic hand CAD iteration and mechanism improvement work.",
    tags: ["Vehicle performance", "SolidWorks", "Mechanisms", "Team projects"],
    intro: "Applied CAD and analysis outside class through student teams focused on vehicle performance and assistive device design.",
    what: [
      "Worked on tire optimization focused on reducing rotational inertia",
      "Supported tire material selection and calculation work",
      "Worked on prosthetic hand CAD iteration and mechanism improvements"
    ],
    how: [
      "Used analysis and calculation modules to evaluate inertia and performance tradeoffs",
      "Modeled prosthetic hand components in CAD and iterated on mechanical function"
    ],
    results: [
      "Built applied design experience outside coursework",
      "Strengthened design iteration and team collaboration skills"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "NU Electric Racing is a student team that designs a car and competes with other schools. My focus was tire performance, specifically reducing rotational inertia and evaluating tire material tradeoffs.",
          "NU Give a Hand supports prosthetic hand design for people in need. My involvement focused on CAD iteration and improving the mechanics of the hand."
        ]
      }
    ]
  },

  {
    id: "timelapse",
    title: "Construction timelapse documentation and graphics",
    kicker: "Technical communication",
    cover: "assets/images/all/project10.jpeg",
    hero: "assets/images/all/project10.jpeg",
    preview: "Multi month construction timelapse videos plus supporting graphics for layout changes used for clear communication and documentation.",
    tags: ["Documentation", "Video editing", "Communication"],
    intro: "Created visual documentation for construction projects and produced supporting graphics for concept changes.",
    what: [
      "Created timelapse videos documenting construction progress over months",
      "Produced clear visual summaries for internal sharing"
    ],
    how: [
      "Recorded consistent viewpoints over long durations",
      "Edited into clear timelapse sequences"
    ],
    results: [
      "Clear visual records for communication and documentation"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "I created timelapse videos for multi month construction projects including a gas station pump redesign and a tennis court redesign. This work supported documentation and communication."
        ]
      }
    ]
  }
];
