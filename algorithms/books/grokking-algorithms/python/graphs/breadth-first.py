from collections import deque

graph = {
  '5' : ['3','7'],
  '3' : ['2', '4'],
  '7' : ['8'],
  '2' : [],
  '4' : ['8'],
  '8' : []
}

visited = [] # List for visited nodes.
queue = []     #Initialize a queue

def bfs(visited, graph, node): #function for BFS
  visited.append(node)
  queue.append(node)

  while queue:          # Creating loop to visit each node
    m = queue.pop(0) 
    print (m, end = " ") 

    for neighbor in graph[m]:
      if neighbor not in visited:
        visited.append(neighbor)
        queue.append(neighbor)

# Driver Code
bfs(visited, graph, '5')  # output => [5, 3, 7, 2, 4, 8];

def search_by_shortest_path_number(entry, number):
     search_queue = deque()
     search_queue += graph[entry]
     searched = []

     while search_queue:
       graph_edge = search_queue.popleft()
       if not graph_edge in searched:
          if graph_edge == number:
            print(f'number - {graph_edge}')
            return True
          else:
            search_queue += graph[graph_edge]
            searched.append(graph_edge)