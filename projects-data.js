window.PROJECTS = [
  {
    id: "inspection-sketches",
    title: "Automated CAD and GIS conversion of hand drawn inspection sketches",
    kicker: "Python automation",
    cover: "assets/images/projects/inspection-sketches.jpg",
    hero: "assets/images/hero/project-hero-1.jpg",
    preview: "Python workflow converting scanned inspection sketches into CAD and GIS vector linework with extracted inspection metadata and faster drafting starts.",
    tags: ["Python", "OCR", "AutoCAD", "ArcGIS", "Georeferencing", "Vectorization", "Engineering documentation"],
    intro: "Hundreds of scanned inspection forms contained handwritten sketches, measurements, checklist items, pipe information, addresses, and field notes. The goal was to convert inconsistent hand sketches into usable CAD and GIS geometry with the inspection information attached in a structured way.",
    what: [
      "Converted scanned utility inspection sketches into CAD and GIS vector linework",
      "Extracted inspection metadata including address, inspector info, pipe size, pipe material, and field notes",
      "Produced clean digital geometry that can be used as a drafting starting point"
    ],
    how: [
      "Scanned inspection checklist PDFs and used OCR to read key text",
      "Identified the sketch region and converted sketch geometry into vector based linework",
      "Attached extracted fields as attributes or comments to the resulting geometry",
      "Placed geometry using the address as a location reference and aligned it to nearby drafted features"
    ],
    results: [
      "Converted dozens of hand drawn sketches into organized CAD and GIS linework",
      "Improved readability and consistency compared to original hand sketches",
      "Reduced initial drafting time by about 50 percent based on a before and after time study"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This project started because the engineering office had hundreds of scanned utility inspection forms that included handwritten sketches, measurements, checklist items, pipe information, addresses, and field notes. These sketches documented utility locations and reference ties to surrounding features such as manholes, utility poles, buildings, and other fixed points. The drawings were important because they helped future engineers, contractors, and field crews locate infrastructure years later.",
          "The problem was that many of the sketches were difficult to read, inconsistent, and not clean enough to use directly in professional drafting packages. My supervisor originally asked me to manually recreate the drawings in AutoCAD. Since there were hundreds of files, I realized this would be slow and repetitive, so I built a Python automation tool to convert the scanned sketches into usable CAD and GIS linework."
        ]
      },
      {
        title: "What I built",
        paragraphs: [
          "I wrote a Python program that scanned inspection checklist PDFs, used OCR to read key text, extracted project information, identified the hand drawn sketch area, and converted the sketch geometry into vector based linework.",
          "The program read information such as address, inspection data, pipe size, pipe material, utility type, inspector name, and field notes, then attached that information as attributes or comments to the resulting vector geometry.",
          "After extracting the address from the form, the workflow used the address as a location reference. The sketch could then be placed over the correct area in CAD and GIS, scaled to match nearby drafted features, and rotated based on the orientation of the street, house, or existing utility geometry."
        ]
      },
      {
        title: "Deliverables",
        paragraphs: [
          "Clean CAD vector linework, GIS compatible vector data, extracted inspection attributes, placed geometry aligned to mapped context, and organized digital inspection records that could be used for future drafting and contractor communication."
        ]
      },
      {
        title: "Results",
        paragraphs: [
          "The program converted dozens of hand drawn sketches into organized CAD and GIS linework. The resulting drawings were cleaner and more professional than the original hand sketches.",
          "I performed a before and after time study and found that the workflow reduced initial drafting time by approximately 50 percent. The improvement was also consistency, engineers could start from cleaner geometry and more reliable digital records."
        ]
      }
    ]
  },

  {
    id: "arcgis-inspections",
    title: "Digital field inspection system with ArcGIS and mobile data collection",
    kicker: "Workflow design",
    cover: "assets/images/projects/arcgis-inspections.jpg",
    hero: "assets/images/hero/project-hero-2.jpg",
    preview: "Survey123 and Field Maps workflow replacing paper forms with offline field capture, map geometry, photos, signatures, and exportable inspection records.",
    tags: ["ArcGIS", "Survey123", "Field Maps", "Mobile data collection", "Inspection workflow", "GIS"],
    intro: "This project replaced a paper based inspection process with a mobile workflow that captures structured inspection fields and map based geometry, supports offline use, and syncs back to the office automatically.",
    what: [
      "Replaced paper inspection forms with a mobile workflow on phones and tablets",
      "Captured checklist fields, photos, signatures, and map based geometry",
      "Designed offline use and automatic syncing back to office systems"
    ],
    how: [
      "Built form logic and required fields in Survey123",
      "Configured Field Maps so users can draw vector linework and attach attributes in the field",
      "Enabled offline saving and automatic upload when back on WiFi",
      "Configured export to PDF matching the original form format"
    ],
    results: [
      "Improved convenience and consistency of inspection records",
      "Reduced manual paperwork and scanning steps",
      "Became a reusable workflow expanded to other inspection categories"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "After working with the old paper based inspection process, I realized the system was outdated. Inspectors used paper checklists, handwritten notes, manual sketches, and physical signatures. The forms then had to be stored, scanned, organized, and manually found again later.",
          "I designed a digital inspection workflow that replaced the paper system with a mobile form and GIS based field collection process. The goal was to make inspections easier to complete in the field, easier to store, and easier to access later."
        ]
      },
      {
        title: "What I built",
        paragraphs: [
          "I used Survey123, Field Maps, ArcGIS, and Esri tools to create a mobile inspection system that could be used on phones and tablets. The form included checklist items, inspector name, date, location, pipe size, pipe material, field notes, photos, contractor signature, and other inspection information.",
          "In Field Maps, I configured the workflow so users could open a local map, zoom to the inspection area, draw vector linework, add dimension lines, and attach attributes to the geometry. This allowed field staff to record written information and spatial information about the work area."
        ]
      },
      {
        title: "Offline capture and export",
        paragraphs: [
          "The system was designed to work in low signal areas. Inspectors could save forms locally while in the field, then upload everything automatically once they returned to the office and connected to WiFi.",
          "Once uploaded, the forms appeared in the Esri system and could be exported as PDFs in the same general format as the original paper inspection form."
        ]
      },
      {
        title: "Results",
        paragraphs: [
          "The system helped replace paper forms for the inspection workflows I digitized. I first implemented it for utility inspections, then expanded similar systems for drainage and water inspections.",
          "I installed the system on office phones so staff could access it directly in the field. This improved convenience, reduced manual paperwork, and created a more consistent inspection record."
        ]
      }
    ]
  },

  {
    id: "recycling-pond",
    title: "Recycling center stormwater redesign and 3D site model",
    kicker: "Survey and surface modeling",
    cover: "assets/images/projects/recycling-pond.jpg",
    hero: "assets/images/hero/project-hero-3.jpg",
    preview: "Operated total station for a full topographic survey, built a 3D surface model, created three design options with profiles, and supported plan production and bid tabulation.",
    tags: ["AutoCAD Civil 3D", "Total station", "Surface modeling", "Contours", "Profiles", "Plan sets", "Cost tabulation"],
    intro: "This project redesigned a detention pond next to a recycling center. The work included field investigation, topographic surveying, CAD surface modeling, multiple redesign alternatives, profiles, presentation graphics, and bid support.",
    what: [
      "Investigated a detention pond that was not draining properly and collected field evidence",
      "Collected more than 500 survey points and built a 3D surface model and contour set",
      "Designed three redesign options and produced plan sheets and profiles",
      "Supported specifications, bid calculations, and cost comparison"
    ],
    how: [
      "Observed site conditions on dry and rainy days and documented debris and drainage behavior",
      "Operated the total station and collected coordinate and elevation data over three days",
      "Imported survey points and built a Civil 3D surface model and contour layers",
      "Created three concept options including snake shaped, three basin, and minimal change options",
      "Produced plan sheets, profiles, details, and presentation graphics using hatching and layout"
    ],
    results: [
      "Delivered an existing conditions base model and three viable redesign alternatives",
      "Second option selected and advanced for construction planning",
      "Supported bid comparison and construction planning workflows"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This project involved redesigning a detention pond next to a recycling center. Several drainage networks discharged into the pond, but the existing pond was not functioning properly. It collected trash, did not drain water effectively, and did not allow stormwater to infiltrate into the ground the way it was intended to.",
          "The project required field investigation, topographic surveying, CAD modeling, surface generation, design alternatives, profiles, graphics, specifications, and construction planning support."
        ]
      },
      {
        title: "Field investigation",
        paragraphs: [
          "I visited the site to understand existing conditions. I observed the pond on a normal day and again during rainy conditions to see how water and trash moved through the area. I took photos and documented where the pond was failing to drain properly.",
          "I then helped complete a topographic survey of the entire area. Over about three days, I operated the total station and captured more than 500 points throughout the site. These points included top of slope, pond bottom, surrounding ground, pavement edges, catch basins, poles, trees, road edges, utility features, water edges, and other key features."
        ]
      },
      {
        title: "CAD surface development",
        paragraphs: [
          "After the survey, I imported the points into AutoCAD Civil 3D and built a 3D surface model of the area. I used the elevation points to create major and minor contour lines and generated a surface representing the existing topography.",
          "I checked elevation data to ensure it matched the correct local datum used by the Town of Wellesley and Massachusetts. Incorrect elevation data would affect grading models, profiles, and proposed drainage design.",
          "The CAD model included trees, poles, catch basins, utilities, pavement limits, water edges, slopes, and surrounding features. This existing conditions model became the base for all proposed redesign options."
        ]
      },
      {
        title: "Design alternatives",
        paragraphs: [
          "I created a title sheet, existing conditions sheet, and three proposed redesign options.",
          "Option one used a curved snake shaped pond layout to increase flow path and surface area so stormwater would have more time to infiltrate.",
          "Option two used three depressions separated by raised areas to allow water movement while slowing trash and debris. Each depression provided a collection and infiltration zone.",
          "Option three kept the design closer to existing conditions as a lower cost option.",
          "For each option, I created plan views and side profiles. I included utility references, pipe networks, catch basin details, outfall details, and installation information."
        ]
      },
      {
        title: "Presentation graphics and bid support",
        paragraphs: [
          "My supervisor requested clearer visuals for review and communication. I used Civil 3D and AutoCAD hatching, lineweights, colors, and layout techniques to create presentation style graphics with grass, shrubs, trees, water, and proposed pond features.",
          "After multiple rounds of redlines, the second option was selected. I also helped with plan set production, specifications, bid calculations, cost tabulation, and comparison of contractor pricing."
        ]
      },
      {
        title: "Results",
        paragraphs: [
          "The second redesign option was selected and moved forward for construction planning. This project covered a full cycle from field observation to survey data collection, CAD surface modeling, concept options, revision cycles, documentation, and bid support."
        ]
      }
    ]
  },

  {
    id: "cad-automation-toolkit",
    title: "CAD automation toolkit for utilities, orthophotos, contours, and file organization",
    kicker: "CAD and GIS systems",
    cover: "assets/images/projects/cad-toolkit.jpg",
    hero: "assets/images/hero/project-hero-4.jpg",
    preview: "Created georeferenced CAD utility layers, orthophoto tiles, contour layers, and Python OCR file organization tools used by the engineering office.",
    tags: ["AutoCAD", "ArcGIS", "Georeferencing", "Orthophotos", "Contours", "Python OCR", "CAD libraries"],
    intro: "This work packaged multiple office wide tools into reusable CAD and automation resources: utility base layers, orthophoto tiles, contour layers, and OCR file organization scripts.",
    what: [
      "Built a town wide utility layer in CAD from GIS exports",
      "Created orthophoto tile library aligned to CAD coordinates",
      "Built a town wide contour layer using drone elevation data",
      "Wrote Python OCR scripts to rename and organize thousands of archived PDFs"
    ],
    how: [
      "Exported GIS layers and imported into CAD with coordinate alignment",
      "Created block based and point based variants for drafting preferences",
      "Tiled orthophotos into manageable sizes with overlap to avoid edge gaps",
      "Processed drone elevation data and generated contours through interpolation",
      "Used OCR to extract identifiers and create a structured folder hub with an index"
    ],
    results: [
      "Office wide base layers used as drafting starting points",
      "Faster drafting setup with existing conditions already present",
      "File retrieval time reduced by about 75 percent based on a before and after time study"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "A major part of my co op involved creating tools that made engineering information easier to find and insert into drawings. The office had large amounts of utility data, aerial imagery, contour information, and archived project documents that were difficult to access quickly during design work.",
          "I created a set of CAD and Python based tools that improved drafting setup, file organization, and technical data access."
        ]
      },
      {
        title: "Town wide utility CAD layer",
        paragraphs: [
          "I created a town wide utility layer in AutoCAD by exporting data from GIS and importing it into CAD at the correct geographic coordinates. The file included water lines, drainage lines, sewer lines, manholes, catch basins, utility poles, electric lines, electric manholes, and other infrastructure.",
          "I created both block based and point based versions so coworkers could choose the format that worked best for their drawings. Since the data was georeferenced, staff could copy a project area into their CAD file and begin drafting with existing utility information already in place."
        ]
      },
      {
        title: "Town wide orthophoto CAD layer",
        paragraphs: [
          "I created a town wide orthophoto layer for CAD plan development. I used MassDOT orthophoto imagery, reduced imagery to the Town of Wellesley, and exported it into approximately 200 foot by 200 foot georeferenced tiles.",
          "The tiles overlapped so if a project area landed near the edge of one tile there would still be coverage from the adjacent tile. This made imagery insertion practical by loading only the tiles needed."
        ]
      },
      {
        title: "Town wide contour layer",
        paragraphs: [
          "I created a town wide contour layer using elevation data collected from a drone survey performed by a contractor. The drone data had about one foot accuracy. I processed elevation information, interpolated between points, and created contour data engineers could use as a general elevation reference."
        ]
      },
      {
        title: "Python OCR file organization system",
        paragraphs: [
          "I wrote Python scripts to organize thousands of archived engineering files. Many files were scanned PDFs with unclear names, inconsistent formatting, and no reliable folder structure.",
          "The program used OCR through PyTesseract to read scanned documents, extract information such as project address and project name, rename each file with a clearer naming convention, and sort the files into a structured folder system.",
          "The script generated an index so staff could find files more easily in the future. When run, it organized thousands of files in minutes and reduced file retrieval time by about 75 percent based on a before and after time study."
        ]
      }
    ]
  },

  {
    id: "drainage-repair",
    title: "Drainage network repair design and construction plan set",
    kicker: "Failure response and design options",
    cover: "assets/images/projects/drainage-repair.jpg",
    hero: "assets/images/hero/project-hero-5.jpg",
    preview: "Mapped existing utilities, reviewed robotic pipe inspection footage, created repair options, and supported a final design implemented by construction crews.",
    tags: ["AutoCAD", "Plan sets", "Utility coordination", "Inspection review", "Design options"],
    intro: "A damaged drainage pipe caused soil buildup and blockage. I documented existing conditions, reviewed inspection footage, produced repair options, and supported a design that was implemented in the field.",
    what: [
      "Documented a damaged pipe section causing sediment buildup and blockage",
      "Mapped existing utilities and existing conditions into CAD",
      "Developed repair options including patch and manhole concepts"
    ],
    how: [
      "Inserted existing utility context using office CAD resources",
      "Reviewed robotic inspection video to identify break location and outlets",
      "Created multiple repair concepts and drawings for review",
      "Revised sheets based on engineer redlines"
    ],
    results: [
      "Final concept selected and implemented in the field",
      "Improved understanding of how drawings support construction decisions and maintenance access"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This project involved a damaged drainage pipe where a large cavity and pipe breakage caused soil to enter and block the drainage system. The issue needed to be evaluated, documented, and repaired.",
          "I helped create CAD drawings and design alternatives used to select the final repair approach."
        ]
      },
      {
        title: "Existing conditions and inspection review",
        paragraphs: [
          "I inserted existing utilities in the project area using the town wide utility CAD layer so I could see surrounding sewer, water, drainage, electric, gas, manholes, and nearby infrastructure before developing repair options.",
          "I reviewed video footage from a robotic inspection vehicle that traveled through the pipe and recorded the damaged area. I used the footage to identify the location of the break, pipe condition, and nearby outlets. I translated that information into CAD so existing conditions were clear."
        ]
      },
      {
        title: "Design options and final selection",
        paragraphs: [
          "I developed multiple repair concepts. One option involved localized patch work. Another involved installing a manhole at the damaged location. The manhole option provided better access for future maintenance and was more practical from a cost and constructability standpoint.",
          "After review, the manhole option was selected and implemented by construction workers hired for the project."
        ]
      }
    ]
  },

  {
    id: "materials-testing",
    title: "Mechanical and materials testing laboratory portfolio",
    kicker: "Testing and validation",
    cover: "assets/images/projects/materials-testing.jpg",
    hero: "assets/images/hero/project-hero-6.jpg",
    preview: "Mechanical testing and materials characterization using Instron systems, Bluehill, Charpy impact, Rockwell hardness, microscopy, X ray diffraction, Arduino sensors, and MATLAB analysis.",
    tags: ["Instron", "Bluehill", "MATLAB", "Charpy", "Rockwell", "Microscopy", "X ray diffraction", "Sensors"],
    intro: "Hands on lab work across mechanics of materials, materials science, measurement and analysis, and thermal applications with real equipment, data collection, troubleshooting, and MATLAB based analysis.",
    what: [
      "Ran tensile, bending, torsion, compression, buckling, impact, and hardness tests",
      "Used Bluehill for test setup, control, and data export",
      "Calculated material properties and interpreted stress strain behavior",
      "Performed microscopy, polariscope stress visualization, and X ray diffraction identification",
      "Built Arduino based data acquisition for lux and temperature sensors"
    ],
    how: [
      "Configured and executed tests on Instron systems including 5582 and MicroTorsion",
      "Collected real time data and processed results in MATLAB to compute properties and generate plots",
      "Compared impact energy across temperature conditions using Charpy equipment and Fracta",
      "Performed Rockwell hardness testing and correlated results to material behavior",
      "Prepared and examined microstructures and quantified phases in alloys",
      "Used WAXD RAPID2 with Archimedes density measurements for crystal structure identification"
    ],
    results: [
      "Built comfort with test setup, validation workflows, and interpretation of mechanical behavior",
      "Produced lab reports, plots, and calculated properties including modulus, yield, ultimate strength, and shear modulus",
      "Gained experience troubleshooting real test setups and sensor data collection"
    ],
    sections: [
      {
        title: "Mechanical testing",
        paragraphs: [
          "In Intro to Materials Science and Mechanics of Materials, I completed six labs working directly with mechanical and materials testing equipment. I gained hands on experience using several Instron systems, including the Instron 5582 for tensile and bending tests, and the Instron MicroTorsion system for torsional testing.",
          "I used Bluehill software to set up and control tests, recorded data in real time, and analyzed results to find values like Young modulus, yield strength, ultimate tensile strength, and shear modulus."
        ]
      },
      {
        title: "Impact and hardness testing",
        paragraphs: [
          "I worked with the Instron Charpy Impact Tester to study how materials behave under sudden loading at different temperatures, from liquid nitrogen cold to furnace hot. I used Fracta software to gather fracture energy data.",
          "I ran Rockwell hardness tests using a digital hardness tester to compare metal hardness and relate it to strength."
        ]
      },
      {
        title: "Structural measurement and behavior",
        paragraphs: [
          "I used a beam deflection apparatus with dial gauges and load cells to measure bending and support reactions. I performed manual tension and torsion tests to study material behavior during loading and unloading, including the Bauschinger effect."
        ]
      },
      {
        title: "Microstructure and material identification",
        paragraphs: [
          "For microstructure work, I used optical microscopes to examine polished and etched metal samples and measured phase percentages in alloys. I used a polarized optical microscope to observe crystal growth in polymers and a polariscope to visualize stress concentrations in plastic parts.",
          "I learned material identification using an X ray diffractometer, specifically the WAXD RAPID2 system. I combined XRD data and density measurements using the Archimedes method to determine crystal structure."
        ]
      },
      {
        title: "Measurement and analysis labs",
        paragraphs: [
          "In Measurement and Analysis with Thermal Applications, I used Arduino based systems to collect experimental data from sensors. I coded Arduino systems to read lux levels, temperature sensors, RTDs, and thermocouples.",
          "I used MATLAB to process the data, create plots and calculations, and interpret material responses under load and sensor responses."
        ]
      }
    ]
  },

  {
    id: "clean-energy-exhibit",
    title: "Clean energy exhibit with 3D printed wind turbine and Arduino controls",
    kicker: "Design build test",
    cover: "assets/images/projects/clean-energy.jpg",
    hero: "assets/images/hero/project-hero-7.jpg",
    preview: "Laser cut house model, SolidWorks wind turbine, 3D printed parts, LED system, and MATLAB Arduino game logic designed for repeated student use.",
    tags: ["SolidWorks", "3D printing", "Laser cutting", "Arduino", "MATLAB", "Prototyping"],
    intro: "Interactive exhibit teaching middle school students clean energy concepts through a physical model with lighting and game logic.",
    what: [
      "Built an interactive exhibit teaching clean energy through hands on engagement",
      "Created a laser cut house model and a 3D printed wind turbine to demonstrate energy generation",
      "Programmed MATLAB and Arduino game logic with lights and sound feedback"
    ],
    how: [
      "Designed the turbine in SolidWorks and printed parts for assembly",
      "Laser cut the house and integrated LEDs into the physical layout",
      "Programmed an educational trivia game in MATLAB and Arduino",
      "Designed for durability and stable behavior under repeated student interaction"
    ],
    results: [
      "Functional hands on learning experience that made renewable energy easier to understand",
      "No code glitches and no pieces breaking during repeated student interaction",
      "Strong feedback on design and execution from students and peers"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "For a Boston middle school exposition at Northeastern, I helped design and build an interactive exhibit that taught students how clean energy works. The goal was to make renewable energy understandable, hands on, and engaging.",
          "The exhibit included a house model, a working wind turbine, LED lighting, trivia questions, push buttons, sensors, and sound feedback."
        ]
      },
      {
        title: "What I built",
        paragraphs: [
          "I laser cut a house model and designed a wind turbine in SolidWorks. The turbine was 3D printed and built so it could physically rotate.",
          "I programmed an interactive educational game in MATLAB and Arduino. Students answered trivia questions about clean energy. When they answered correctly, the system activated lighting and played a small chime."
        ]
      },
      {
        title: "Design requirements and results",
        paragraphs: [
          "The exhibit had to survive repeated use, be intuitive without long explanation, and stay reliable for the full event. I focused on durable structure, organized wiring, and stable coded interactions.",
          "The exhibit worked successfully during the exposition. Students interacted with the turbine and trivia system, and the build held up under repeated use."
        ]
      }
    ]
  },

  {
    id: "ca-light-designs",
    title: "Custom LED product design and engraving machine optimization",
    kicker: "Product development and manufacturing",
    cover: "assets/images/projects/ca-light.jpg",
    hero: "assets/images/hero/project-hero-8.jpg",
    preview: "Designed and manufactured custom engraved LED signs, improved engraving hardware and workflow, built web presence, and scaled order volume through better production and customer experience.",
    tags: ["Product design", "Manufacturing", "Machine modification", "Quality control", "Wix", "Etsy", "Silhouette Studio"],
    intro: "CA Light Designs was a custom engraved LED sign business I founded and operated. I owned product design, production, machine setup changes, customer communication, website, and online storefronts.",
    what: [
      "Founded and operated a custom engraved LED sign business producing personalized acrylic LED products",
      "Designed engraving layouts and ran production workflow from design through fulfillment",
      "Modified the engraving machine setup to improve engraving quality and throughput",
      "Built a website and online storefront presence to drive orders"
    ],
    how: [
      "Used Silhouette Studio and design software to create vector based engravings and layouts",
      "Operated engraving machine and assembled finished products with LED bases",
      "Researched compatible tooling and parts and modified the machine for acrylic engraving quality",
      "Built Wix website and created Instagram, TikTok, and Etsy presence"
    ],
    results: [
      "Five star reviews and strong customer satisfaction",
      "Improved engraving output quality and faster production times",
      "Doubled order volume within a year through workflow and online growth"
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "CA Light Designs was a custom LED sign business I founded and operated. I designed and manufactured personalized acrylic LED signs for colleges, dorm rooms, events, and gifts.",
          "This project taught me how design, manufacturing workflow, machine operation, product quality, and customer needs connect."
        ]
      },
      {
        title: "Product design and production",
        paragraphs: [
          "I used Silhouette Studio and CAD style design tools to create engraving layouts. I converted customer ideas into clean vector designs, prepared files for engraving, operated the engraving machine, assembled the finished product, packaged orders, and communicated with customers.",
          "I considered line thickness, spacing, material behavior, acrylic clarity, lighting quality, and how the design looked once illuminated by the LED base."
        ]
      },
      {
        title: "Engraving machine modification",
        paragraphs: [
          "As order volume increased, I needed to improve production speed and engraving quality. The engraving machine originally used a metal cutting attachment that was too dull and not strong enough for the acrylic material I was using.",
          "I researched compatible parts and modifications, changed the tooling setup, and adjusted operating settings to increase speed while maintaining clean engraving quality."
        ]
      },
      {
        title: "Website and ecommerce",
        paragraphs: [
          "I built a website from scratch using Wix and created Instagram, TikTok, and Etsy pages to market the products, interact with customers, and process orders.",
          "I used product photos and videos so customers could visualize signs and customize designs."
        ]
      },
      {
        title: "Results",
        paragraphs: [
          "The business received five star reviews and strong customer satisfaction. I improved engraving output quality, reduced production time, and doubled order volume within a year through workflow improvements and online marketing."
        ]
      }
    ]
  },

  {
    id: "clubs",
    title: "Prosthetic hand design and electric racing tire optimization",
    kicker: "Student engineering teams",
    cover: "assets/images/projects/clubs.jpg",
    hero: "assets/images/hero/project-hero-9.jpg",
    preview: "SolidWorks prosthetic mechanism modeling and prototyping plus MATLAB based tire performance evaluation focused on acceleration, efficiency, and rotational inertia tradeoffs.",
    tags: ["SolidWorks", "3D printing", "MATLAB", "Mechanisms", "Vehicle dynamics"],
    intro: "Two club experiences that let me apply design and analysis outside of class: NU Give a Hand and NU Electric Racing.",
    what: [
      "Modeled prosthetic hand mechanisms and supported prototype iteration",
      "Evaluated tire performance tradeoffs affecting acceleration, efficiency, and rotational inertia",
      "Worked in team design contexts with iterative improvement cycles"
    ],
    how: [
      "Used SolidWorks to model mechanisms and supported 3D printed prototype iteration",
      "Collaborated with peers to improve function, assembly, and manufacturability",
      "Used MATLAB based analysis to evaluate tire choices and performance implications"
    ],
    results: [
      "Expanded CAD and prototyping experience through mechanism iteration",
      "Built comfort evaluating performance tradeoffs and documenting design decisions",
      "Strengthened design collaboration and iterative improvement skills"
    ],
    sections: [
      {
        title: "NU Give a Hand",
        paragraphs: [
          "As a designer with NU Give a Hand, I worked on prosthetic hand design and prototyping. The goal is to create functional and accessible assistive devices using CAD modeling, 3D printing, and iterative design.",
          "I modeled prosthetic hand mechanisms in SolidWorks, supported 3D printed prototyping, and collaborated with peers to improve mechanical function, fit, and manufacturability. The work required thinking about motion, durability, assembly, and comfort."
        ]
      },
      {
        title: "NU Electric Racing",
        paragraphs: [
          "As a tire optimization volunteer with NU Electric Racing, I supported work related to vehicle performance. The focus was how tire properties affect acceleration, efficiency, rotational inertia, rolling resistance, traction, and vehicle dynamics.",
          "I used MATLAB based analysis to support tire performance evaluation and understand how tire selection affects electric race car performance."
        ]
      }
    ]
  },

  {
    id: "timelapse",
    title: "Construction progress timelapse and technical communication work",
    kicker: "Documentation and communication",
    cover: "assets/images/projects/timelapse.jpg",
    hero: "assets/images/hero/project-hero-10.jpg",
    preview: "Timelapse documentation for construction projects plus intersection redesign graphics to communicate layout changes clearly through visuals and sequencing.",
    tags: ["Technical communication", "Video editing", "Construction documentation", "Graphics"],
    intro: "Visual documentation work supporting engineering communication: multi month timelapse videos and concept graphics for layout changes.",
    what: [
      "Created construction timelapse videos documenting progress over months",
      "Produced engineering graphics for an intersection layout concept",
      "Organized media and outputs for clear internal sharing"
    ],
    how: [
      "Recorded consistent viewpoints over long durations and compiled into timelapse sequences",
      "Edited footage and assembled clear progress sequences using video tools",
      "Created graphics showing lane and signal concepts for review"
    ],
    results: [
      "Clear visual record of construction progress",
      "Improved communication of design intent using visuals rather than text only",
      "Stronger technical communication and presentation skills"
    ],
    sections: [
      {
        title: "Construction timelapse videos",
        paragraphs: [
          "I created timelapse videos for projects around Wellesley including a gas pump station redesign and a tennis court redesign. Each project was documented over about four months.",
          "I collected footage over time, organized video files, selected useful clips, and edited footage into a clear construction sequence using tools such as iMovie and Clipchamp."
        ]
      },
      {
        title: "Intersection redesign graphics",
        paragraphs: [
          "I created graphics for an intersection causing traffic and circulation issues. The graphics showed potential improvements such as new lanes, left turn lanes, revised signal locations, and improved lane organization."
        ]
      }
    ]
  }
];
