 function init() {
   if (window.goSamples) goSamples();
   var $$ = go.GraphObject.make;
   myDiagram =
     $$(go.Diagram, "myDiagramDiv", {
       allowCopy: false,
       allowDelete: false,
       initialContentAlignment: go.Spot.Center,
       // "textEditingTool.starting": go.TextEditingTool.SingleClick,
       "draggingTool.dragsTree": true,
       layout: $$(go.TreeLayout, { angle: 90, layerSpacing: 30 }),
       "undoManager.isEnabled": true
     });

   myDiagram.add(
     $$(go.Part, "Table", { position: new go.Point(0, 0), selectable: false },
      $$(go.Panel, "Horizontal", { row: 1, alignment: go.Spot.Left },
         $$(go.Shape, "Rectangle", { desiredSize: new go.Size(10, 10), fill: "#000", margin: 5 }),
         $$(go.TextBlock, "Project Manager Name", { font: "700 13px Droid Serif, sans-serif" })
       ),
      $$(go.Panel, "Horizontal", { row: 2, alignment: go.Spot.Left },
         $$(go.Shape, "Rectangle", { desiredSize: new go.Size(10, 10), fill: "#4c4c4c", margin: 5 }),
         $$(go.TextBlock, "Project Name", { font: "700 13px Droid Serif, sans-serif" })
       ),
       $$(go.Panel, "Horizontal", { row: 3, alignment: go.Spot.Left },
         $$(go.Shape, "Rectangle", { desiredSize: new go.Size(10, 10), fill: "#BF5540", margin: 5 }),
         $$(go.TextBlock, "Project Managers", { font: "700 13px Droid Serif, sans-serif" })
       ),
       $$(go.Panel, "Horizontal", { row: 4, alignment: go.Spot.Left },
         $$(go.Shape, "Rectangle", { desiredSize: new go.Size(10, 10), fill: "#8F663D", margin: 5 }),
         $$(go.TextBlock, "Business Analyst", { font: "700 13px Droid Serif, sans-serif" })
       ),
       $$(go.Panel, "Horizontal", { row: 5, alignment: go.Spot.Left },
         $$(go.Shape, "Rectangle", { desiredSize: new go.Size(10, 10), fill: "#85475C", margin: 5 }),
         $$(go.TextBlock, "Architect", { font: "700 13px Droid Serif, sans-serif" })
       ),
       $$(go.Panel, "Horizontal", { row: 6, alignment: go.Spot.Left },
         $$(go.Shape, "Rectangle", { desiredSize: new go.Size(10, 10), fill: "#857A47", margin: 5 }),
         $$(go.TextBlock, "Team Lead", { font: "700 13px Droid Serif, sans-serif" })
       ),
        $$(go.Panel, "Horizontal", { row: 7, alignment: go.Spot.Left },
         $$(go.Shape, "Rectangle", { desiredSize: new go.Size(10, 10), fill: "#7A4785", margin: 5 }),
         $$(go.TextBlock, "Module Lead", { font: "700 13px Droid Serif, sans-serif" })
       ),
       $$(go.Panel, "Horizontal", { row: 8, alignment: go.Spot.Left },
         $$(go.Shape, "Rectangle", { desiredSize: new go.Size(10, 10), fill: "#7A8547", margin: 5 }),
         $$(go.TextBlock, "Developer", { font: "700 13px Droid Serif, sans-serif" })
       ),
       $$(go.Panel, "Horizontal", { row: 9, alignment: go.Spot.Left },
         $$(go.Shape, "Rectangle", { desiredSize: new go.Size(10, 10), fill: "#668547", margin: 5 }),
         $$(go.TextBlock, "UX Designer", { font: "700 13px Droid Serif, sans-serif" })
       ),
       $$(go.Panel, "Horizontal", { row: 10, alignment: go.Spot.Left },
         $$(go.Shape, "Rectangle", { desiredSize: new go.Size(10, 10), fill: "#47857A", margin: 5 }),
         $$(go.TextBlock, "Designer", { font: "700 13px Droid Serif, sans-serif" })
       ),
        $$(go.Panel, "Horizontal", { row: 11, alignment: go.Spot.Left },
         $$(go.Shape, "Rectangle", { desiredSize: new go.Size(10, 10), fill: "#476685", margin: 5 }),
         $$(go.TextBlock, "Tester", { font: "700 13px Droid Serif, sans-serif" })
       )

     ));

   myDiagram.nodeTemplate =
     $$(go.Node, "Spot", { click: showDetail },
       $$(go.Panel, "Auto", { portId: "" },
         $$(go.Shape, { stroke: null },
           new go.Binding("fill", "color")),
         $$(go.Picture, { margin: 5 },
           new go.Binding("source")),
         $$(go.TextBlock, {
             margin: new go.Margin(10, 10, 10, 10),
             stroke: "whitesmoke"
               // editable: true
           },
           new go.Binding("text")
         )
       ),
       $$("TreeExpanderButton", {
         alignment: new go.Spot(0.5, 1, 0, 5),
         "ButtonIcon.stroke": "white",
         "ButtonBorder.fill": "#666",
         "ButtonBorder.stroke": "#000",
         "_buttonFillOver": "#000",
         "_buttonStrokeOver": "#666"
       }),

       $$(go.TextBlock, {
           alignment: new go.Spot(0.5, 1, 20, 20),
           stroke: "#000",
         },
         new go.Binding("text", "level"))
     );

   myDiagram.linkTemplate =
     $$(go.Link, go.Link.Orthogonal, { layerName: "Background", curviness: 10, corner: 5 },
       $$(go.Shape, { strokeWidth: 1.5, stroke: "#666" })
     );
   var model = $$(go.TreeModel);
   model.nodeDataArray = [
     { "key": 1, text: "", level: "1", color: "#dadada", description: "QBurst is a global IT services company focusing on Big Data Analytics, Cloud and DevOps Consulting, and Mobile App Development.", source: "images/QBlogo.svg" },
     { "key": 2, text: "Manas Nair", parent: 1, level: "2", color: "#000", description: "Main Project Manager" },
     { "key": 3, text: "Adani Shantigram Community Mobile App", parent: 2, level: "3", color: "#4c4c4c", description: "To develop community app in iOS, Android and web platform handshaking with Drupal backend. Native apps built using iOS SDK and Android SDK. Web app developed in Drupal framework to manage app content and to facilitate business functions." },
     { "key": 4, text: "Sunny Diamonds e-Commerce Platform", parent: 2, level: "3", color: "#4c4c4c", description: "The scope of this project involves design and development of an e-commerce platform for Sunny Diamonds where the end customers can buy high purity gems and ornaments." },
     { "key": 5, text: "Project Managers", parent: 3, level: "4", color: "#BF5540", description: "Manages the whole Project flow" },
     { "key": 6, text: "Manooja Manoharan", parent: 5, level: "5", color: "#BF5540", description: "" },
     { "key": 7, text: "Saju Devasia", parent: 5, level: "5", color: "#BF5540", description: "" },
     { "key": 8, text: "Business Analyst", parent: 3, level: "4", color: "#8F663D", description: "Analysing the project requirements" },
     { "key": 9, text: "Rohith Ramesh", parent: 8, level: "5", color: "#8F663D", description: "" },
     { "key": 10, text: "Team Lead", parent: 3, level: "4", color: "#857A47", description: "Leads the whole project team" },
     { "key": 11, text: "Al-Muneef Saifudeen", parent: 10, level: "5", color: "#857A47", description: "" },
     { "key": 12, text: "Sajeer Noohukannu", parent: 10, level: "5", color: "#857A47", description: "" },
     { "key": 13, text: "Manu Mohan", parent: 10, level: "5", color: "#857A47", description: "" },
     { "key": 14, text: "Developer", parent: 3, level: "4", color: "#7A8547", description: "Developing the application based on the requirements and the design" },
     { "key": 15, text: "Santo Philip", parent: 14, level: "5", color: "#7A8547", description: "" },
     { "key": 16, text: "Ajeem Ashraf", parent: 14, level: "5", color: "#7A8547", description: "" },
     { "key": 17, text: "Deena Philip", parent: 14, level: "5", color: "#7A8547", description: "" },
     { "key": 18, text: "Akshaya Thazhathu", parent: 14, level: "5", color: "#7A8547", description: "" },
     { "key": 19, text: "Jayashankar Babu", parent: 14, level: "5", color: "#7A8547", description: "" },
     { "key": 20, text: "UX Designer", parent: 3, level: "4", color: "#668547", description: "designing the UX as per the requirements" },
     { "key": 21, text: "Nandu Sreekumar", parent: 20, level: "5", color: "#668547", description: "" },
     { "key": 22, text: "Designer", parent: 3, level: "4", color: "#47857A", description: "designing the UI as per the requirements" },
     { "key": 23, text: "Anoop Krishna", parent: 22, level: "5", color: '#668547', description: "" },
     { "key": 24, text: "Tester", parent: 3, level: "4", color: "#476685", description: "Tests the whole website/application on the basis of the UI and functionalities" },
     { "key": 25, text: "Shaira Nooh", parent: 24, level: "5", color: "#476685", description: "" },
     { "key": 26, text: "Project Managers", parent: 4, level: "4", color: "#BF5540", description: "Manages the whole Project flow" },
     { "key": 27, text: "Vibhin Sreevalsan", parent: 26, level: "5", color: "#BF5540", description: "" },
     { "key": 28, text: "Saju Devasia", parent: 26, level: "5", color: "#BF5540", description: "" },
     { "key": 29, text: "Business Analyst", parent: 4, level: "4", color: "#8F663D", description: "Analysing the project requirements" },
     { "key": 30, text: "Rohith Gabriel", parent: 29, level: "5", color: "#8F663D", description: "" },
     { "key": 31, text: "Architect", parent: 4, level: "4", color: "#85475C", description: "" },
     { "key": 32, text: "Lekshmi Krishnan", parent: 31, level: "5", color: "#85475C", description: "" },
     { "key": 33, text: "Team Lead", parent: 4, level: "4", color: "#857A47", description: "Leads the whole project team" },
     { "key": 34, text: "Abhilash Vijayan", parent: 33, level: "5", color: "#857A47", description: "" },
     { "key": 35, text: "Module Lead", parent: 4, level: "4", color: "#7A4785", description: "" },
     { "key": 36, text: "Nithal Ajayakumar", parent: 35, level: "5", color: "#7A4785", description: "" },
     { "key": 37, text: "Developer", parent: 4, "fill": "green", level: "4", color: "#7A8547", description: "Developing the application based on the requirements and the design" },
     { "key": 38, text: "Nimmi Sasidharan", parent: 37, level: "5", color: "#7A8547", description: "" },
     { "key": 39, text: "Sreya Paul", parent: 37, level: "5", color: "#7A8547", description: "" },
     { "key": 40, text: "Seena James", parent: 37, level: "5", color: "#7A8547", description: "" },
     { "key": 41, text: "UX Designer", parent: 4, level: "4", color: "#668547", description: "designing the UX as per the requirements" },
     { "key": 42, text: "Afthab Ali", parent: 41, level: "5", color: "#668547", description: "" },
     { "key": 43, text: "Tester", parent: 4, level: "4", color: "#476685", description: "Tests the whole website/application on the basis of the UI and functionalities" },
     { "key": 44, text: "Anuja Murukesh", parent: 43, level: "5", color: "#476685", description: "" }
   ];
   myDiagram.model = model;
 }

 function showDetail(e, node) {
   $(".selected-node").text(node.data.text);
   $(".description").text(node.data.description);
   $(".description-section").css("border", "1px solid #ccc");
 }
