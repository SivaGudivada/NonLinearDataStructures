

function printGraph(){
  var info;
  info= {nodes:[],edges:[]};
  info.nodes=myData.nodes;
  info.edges=myData.edges;
  //Adding from json to DataSet

  var NodeObj = info.nodes//{};
  var NodeJSONdata = new vis.DataSet(options); NodeJSONdata.add(NodeObj);
  var EdgeObj = info.edges;//{};
  var EdgeJSONdata = new vis.DataSet(options); EdgeJSONdata.add(EdgeObj);
	//Adding from json to DataSet ends

  // create a network
  var container = document.getElementById('mynetwork');
  // provide the data in the vis format
  var data = {
      nodes: NodeJSONdata,
      edges: EdgeJSONdata
  };
  var options = {
     layout: {
      hierarchical: {
        direction: "UD",
        sortMethod : "directed"
      }
    }
};
  // initialize your network!
  var network = new vis.Network(container, data, options);
}
