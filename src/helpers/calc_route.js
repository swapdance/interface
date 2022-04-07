const { ethers } = require('ethers')

function shortestPath(graph, source, target) {
  if (source == target) {
    return;
  }
  var queue = [ source ],
      visited = { source: true },
      predecessor = {},
      tail = 0;
  while (tail < queue.length) {
    var u = queue[tail++],  // Pop a vertex off the queue.
        neighbors = graph.neighbors[u];
    for (var i = 0; i < neighbors.length; ++i) {
      var v = neighbors[i];
      if (visited[v]) {
        continue;
      }
      visited[v] = true;
      if (v === target) {   // Check if the path is complete.
        var path = [ v ];   // If so, backtrack through the path.
        while (u !== source) {
          path.push(u);
          u = predecessor[u];
        }
        path.push(u);
        path.reverse();
        //print(path.join(' &rarr; '));
        return path;
      }
      predecessor[v] = u;
      queue.push(v);
    }
  }
//  console.log('there is no path from ' + source + ' to ' + target);
}

function get_path(trade_route, full_data, temp_station_path, station_path){
    for (let i = 0; trade_route.length > i; i++) {
        full_data.forEach(function(pair){
            if (pair.token_address_a == trade_route[i] && pair.token_address_b == trade_route[i+1] 
                || pair.token_address_b == trade_route[i] && pair.token_address_a == trade_route[i+1] ) 
                temp_station_path.push(pair.station_address);
            });
    }
    station_path.push(temp_station_path);
    
    let balance1;
    let balance2;
    let balances = [];
    let trade_addr1 = trade_route[0];
    let trade_addr2 = trade_route[trade_route.length - 1];

    for (let i = 0; station_path[0].length > i; i++) {
        full_data.forEach(function(pair){
            if (pair.station_address == station_path[0][i] && pair.token_address_a == trade_addr1 
                || pair.station_address == station_path[0][i] && pair.token_address_b == trade_addr1 )
                if (pair.token_address_a == trade_addr1) {
                  balance1 = ethers.utils.formatUnits(pair.token_balance_a, pair.token_decimals_a);
                  balances.push(balance1);
                } else if (pair.token_address_b == trade_addr1) {
                  balance1 = ethers.utils.formatUnits(pair.token_balance_b, pair.token_decimals_b);
                  balances.push(balance1);
                }
            }
        );
    }

    for (let i = 0; station_path[0].length > i; i++) {
        full_data.forEach(function(pair){
            if (pair.station_address == station_path[0][i] && pair.token_address_a == trade_addr2 
                || pair.station_address == station_path[0][i] && pair.token_address_b == trade_addr2)
                if (pair.token_address_a == trade_addr2) {
                  balance2 = ethers.utils.formatUnits(pair.token_balance_a, pair.token_decimals_a);
                  balances.push(balance2);

                } else if (pair.token_address_b == trade_addr2) {
                  balance2 = ethers.utils.formatUnits(pair.token_balance_b, pair.token_decimals_b);
                  balances.push(balance2);
                }
            }
        );
    }
    
    return {station_path: station_path, balances: balances};
}

export {shortestPath, get_path};