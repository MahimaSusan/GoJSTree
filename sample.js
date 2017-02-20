 function init() {
   if (window.goSamples) goSamples(); // init for these samples -- you don't need to call this
   var $ = go.GraphObject.make; // for conciseness in defining templates
   myDiagram =
     $(go.Diagram, "myDiagramDiv", {
       allowCopy: false,
       allowDelete: false,
       initialContentAlignment: go.Spot.Center,
       "textEditingTool.starting": go.TextEditingTool.SingleClick,
       "draggingTool.dragsTree": true,
       layout: $(go.TreeLayout, { angle: 90, layerSpacing: 30 }),
       "undoManager.isEnabled": true
     });

   myDiagram.nodeTemplate = // the default node template
     $(go.Node, "Spot", { selectionObjectName: "BODY", locationSpot: go.Spot.Center, locationObjectName: "BODY" },
       // the main "BODY" consists of a Rectangle surrounding some text
       $(go.Panel, "Auto", { name: "BODY", portId: "" },
         $(go.Shape, { fill: $(go.Brush, "Linear", { 0: "#4c4c4c", 1: "#000" }), stroke: null }),
         $(go.TextBlock, {
             margin: new go.Margin(2, 10, 2, 10),
             maxSize: new go.Size(100, NaN),
             stroke: "whitesmoke",
             editable: true
           },
           new go.Binding("text"))
       ), // end "BODY", an Auto Panel
       $("TreeExpanderButton", { alignment: new go.Spot(0.45, 1, 0, 5), alignmentFocus: go.Spot.Left }),
       $(go.TextBlock,
       //   // new go.Binding("visible", "figure", function(f) {
       //   // }), // if we don't have a figure, don't display any choice text
      {
        alignment: new go.Spot(0.5, 1, 20, 20),
      alignmentFocus: go.Spot.Left,
     stroke: "black",
      },
         new go.Binding("text", "choice"))
     );

   myDiagram.linkTemplate =
     $(go.Link, go.Link.Orthogonal, { layerName: "Background", curviness: 10, corner: 5 },
       $(go.Shape, { strokeWidth: 1.5 })
     );
   var model = $(go.TreeModel);
   model.nodeDataArray = [
     { "key": 1, "text": "QBurst" },
     { "key": 2, "text": "Manas Nair", "parent": 1, "choice": "G02" },
     { "key": 3, "text": "Adani Shantigram Community Mobile App", "parent": 2, "choice": "G03" },
     { "key": 4, "text": "Sunny Diamonds e-Commerce Platform", "parent": 2, "choice": "B01" },
     { "key": 5, "text": "Project Managers", "parent": 3, "choice": "G04" },
     { "key": 6, "text": "Business Analyst", "parent": 3, "choice": "G05" },
     { "key": 7, "text": "Team Lead", "parent": 3, "choice": "T01" },
     { "key": 8, "text": "Developer", "parent": 3, "fill": "green", "choice": "B02" },
     { "key": 9, "text": "UX Designer", "parent": 3, "choice": "T02" },
     { "key": 9, "text": "Designer", "parent": 3, "choice": "T02" },
     { "key": 10, "text": "Tester", "parent": 3, "choice": "B03" }
   ];
   myDiagram.model = model;
 }
