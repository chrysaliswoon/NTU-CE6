
# Brief
We have learn much about Processes and Threads. By that, you should able to know the key points of Processes and Threads.

- Create a table to differentiate between threads and processes
- Create another table to differentiate between multi-threading and multi-processing

You may use any resources available online for research and create your own differentiation of the two concepts.

# Differences between Threads and Process

| Feature | Threads | Process |
| ------------- | ------------- | -------------|
| Definition  | Smallest unit of execution within a process	  | Independent unit of execution in the operating system |
| Creation  | Created within a process  | Independently created |
| Communication	  | Share memory and resources of parent process  | Inter-process communication (IPC) mechanisms needed |
| Overhead  | Less overhead in creation and context switching | More overhead due to separate memory space |
| Context Switching  | Faster context switching  | Slower context switching |
| Dependency  | Dependent on parent process  | Independent of other processes |
| Parallelism  | Can execute concurrently within a process  | Execute concurrently with other processes |
| Scalability | Limited scalability due to shared resources  | Can scale better by distributing tasks |
| Example | Multiple tabs in a browser | Multiple applications running on a computer |


# Differences between Multi-threading and Multi-processing

| Feature | Multi-threading | Multi-processing |
| ------------- | ------------- | -------------|
| Basic Unit  | Threads  | Processes |
| Example  |In a web server, multiple threads handle different client requests within the same process | In a video rendering application, multiple processes render different frames of a video simultaneously |