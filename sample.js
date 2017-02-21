 function init() {
   if (window.goSamples) goSamples(); // init for these samples -- you don't need to call this
   var $$ = go.GraphObject.make; // for conciseness in defining templates
   myDiagram =
     $$(go.Diagram, "myDiagramDiv", {
       allowCopy: false,
       allowDelete: false,
       initialContentAlignment: go.Spot.Center,
       "textEditingTool.starting": go.TextEditingTool.SingleClick,
       "draggingTool.dragsTree": true,
       layout: $$(go.TreeLayout, { angle: 90, layerSpacing: 30 }),
       "undoManager.isEnabled": true
     });


   // diagram.nodeTemplate =
   //   $$(go.Node, "Auto",
   //     $$(go.Shape,
   //       { figure: "RoundedRectangle",
   //         fill: "white" },  // default Shape.fill value
   //       new go.Binding("fill", "color")),  // binding to get fill from nodedata.color
   //     $$(go.TextBlock,
   //       { margin: 5 },
   //       new go.Binding("text", "key"))  // binding to get TextBlock.text from nodedata.key
   //   );

   function showDetail(e, node) {
     $(".description").text(node.data.description);
   }
   myDiagram.nodeTemplate = // the default node template
     $$(go.Node, "Spot", { click: showDetail },
       // the main "BODY" consists of a Rectangle surrounding some text
       $$(go.Panel, "Auto", { portId: "" },
         $$(go.Shape, { stroke: null },
           new go.Binding("fill", "color")),
         $$(go.TextBlock, {
             margin: new go.Margin(10, 10, 10, 10),
             // maxSize: new go.Size(100, NaN),
             stroke: "whitesmoke",
             editable: true
           },
           new go.Binding("text")
         ) //{ click: function(e, obj) { showMessage("Clicked on " + obj.part.data.description); } }
       ), // end "BODY", an Auto Panel
       $$("TreeExpanderButton", { alignment: new go.Spot(0.5, 1, 0, 5) }),
       $$(go.TextBlock,
         //   // new go.Binding("visible", "figure", function(f) {
         //   // }), // if we don't have a figure, don't display any choice text
         {
           alignment: new go.Spot(0.5, 1, 20, 20),
           alignmentFocus: go.Spot.Left,
           stroke: "#000",
         },
         new go.Binding("text", "choice"))
     );

   myDiagram.linkTemplate =
     $$(go.Link, go.Link.Orthogonal, { layerName: "Background", curviness: 10, corner: 5 },
       $$(go.Shape, { strokeWidth: 1.5, stroke: "#666" })
     );
   var model = $$(go.TreeModel);
   model.nodeDataArray = [
     { "key": 1, "text": "QBurst", "choice": "1", color: "#990000", description: "QBurst is a global IT services company focusing on Big Data Analytics, Cloud and DevOps Consulting, and Mobile App Development." },
     { "key": 2, "text": "Manas Nair", "parent": 1, "choice": "2", color: "#000" },
     { "key": 3, "text": "Adani Shantigram Community Mobile App", "parent": 2, "choice": "3", color: "#4c4c4c" },
     { "key": 4, "text": "Sunny Diamonds e-Commerce Platform", "parent": 2, "choice": "3", color: "#4c4c4c" },
     { "key": 5, "text": "Project Managers", "parent": 3, "choice": "4", color: "#BF5540" },
     { "key": 6, "text": "Manooja Manoharan", "parent": 5, "choice": "4", color: "#BF6A40" },
     { "key": 7, "text": "Saju Devasia", "parent": 5, "choice": "4", color: "#BF6A40" },
     { "key": 8, "text": "Business Analyst", "parent": 3, "choice": "4", color: "#8F663D" },
     { "key": 9, "text": "Rohith Ramesh", "parent": 8, "choice": "4", color: "#B2904D" },
     { "key": 10, "text": "Team Lead", "parent": 3, "choice": "4", color: "#857A47" },
     { "key": 11, "text": "Al-Muneef Saifudeen, Manu Mohan", "parent": 10, "choice": "4", color: "#636336" },
     { "key": 12, "text": "Sajeer Noohukannu", "parent": 10, "choice": "4", color: "#636336" },
     { "key": 13, "text": "Manu Mohan", "parent": 10, "choice": "4", color: "#636336" },
     { "key": 14, "text": "Developer", "parent": 3, "choice": "4", color: "#7A8547" },
     { "key": 15, "text": "Santo Philip", "parent": 14, "choice": "4", color: "#546336" },
     { "key": 16, "text": "Ajeem Ashraf", "parent": 14, "choice": "4", color: "#546336" },
     { "key": 17, "text": "Deena Philip", "parent": 14, "choice": "4", color: "#546336" },
     { "key": 18, "text": "Akshaya Thazhathu", "parent": 14, "choice": "4", color: "#546336" },
     { "key": 19, "text": "Jayashankar Babu", "parent": 14, "choice": "4", color: "#546336" },
     { "key": 20, "text": "UX Designer", "parent": 3, "choice": "4", color: "#668547" },
     { "key": 21, "text": "Nandu Sreekumar", "parent": 20, "choice": "4", color: "#5C8547" },
     { "key": 22, "text": "Designer", "parent": 3, "choice": "4", color: "#47857A" },
     { "key": 23, "text": "Anoop Krishna", "parent": 22, "choice": "4", color: '#366363' },
     { "key": 24, "text": "Tester", "parent": 3, "choice": "4", color: "#476685" },
     { "key": 25, "text": "Shaira Nooh", "parent": 24, "choice": "4", color: "#363D63" },
     { "key": 26, "text": "Project Managers", "parent": 4, color: "#BF5540" },
     { "key": 27, "text": "Vibhin Sreevalsan", "parent": 26, color: "#BF6A40" },
     { "key": 28, "text": "Saju Devasia", "parent": 26, color: "#BF6A40" },
     { "key": 29, "text": "Business Analyst", "parent": 4, "choice": "4", color: "#8F663D" },
     { "key": 30, "text": "Rohith Gabriel", "parent": 29, "choice": "4", color: "#B2904D" },
     { "key": 31, "text": "Architect", "parent": 4, "choice": "4", color: "#85475C" },
     { "key": 32, "text": "Lekshmi Krishnan", "parent": 31, "choice": "4", color: "#854752" },
     { "key": 33, "text": "Team Lead", "parent": 4, "choice": "4", color: "#857A47" },
     { "key": 34, "text": "Abhilash Vijayan", "parent": 33, "choice": "4", color: "#636336" },
     { "key": 35, "text": "Module Lead", "parent": 4, "choice": "4", color: "#7A4785" },
     { "key": 36, "text": "Nithal Ajayakumar", "parent": 35, "choice": "4", color: "#633663" },
     { "key": 37, "text": "Developer", "parent": 4, "fill": "green", "choice": "4", color: "#7A8547" },
     { "key": 38, "text": "Nimmi Sasidharan", "parent": 37, "choice": "4", color: "#546336" },
     { "key": 39, "text": "Sreya Paul", "parent": 37, "choice": "4", color: "#546336" },
     { "key": 40, "text": "Seena James", "parent": 37, "choice": "4", color: "#546336" },
     { "key": 41, "text": "UX Designer", "parent": 4, "choice": "4", color: "#668547" },
     { "key": 42, "text": "Afthab Ali", "parent": 41, "choice": "4", color: "#5C8547" },
     { "key": 43, "text": "Tester", "parent": 4, "choice": "4", color: "#476685" },
     { "key": 44, "text": "Anuja Murukesh", "parent": 43, "choice": "4", color: "#363D63" }
   ];
   myDiagram.model = model;
 }
