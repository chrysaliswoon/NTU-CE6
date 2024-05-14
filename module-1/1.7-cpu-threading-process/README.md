
# Introduction

### Central Processing Unit (CPU)

![CPU](https://www.lifewire.com/thmb/N8tZcG3rKyUnl5u_CFTTHw8OvZE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-a-cpu-2618150-7d954fae9aa943ada68d9954df50c614.png)

The CPU is the brain and heart of all digital systems, and is responsible for handling the processing of logical and mathematical operations and executing instructions that it is given.

<p align="center">
  <img width="100%" height="100%" src="https://static.javatpoint.com/terms/images/cpu-central-processing-unit4.png">
</p>

**The CPU is in charge of four tasks:**

1. **Fetching** instructions from memory, in order to know how to handle the input and know the corresponding instructions for that particular input data it received. Specifically, it looks for the address of the corresponding instruction and forwards the request to the RAM. The CPU and RAM constantly work together. This is also called reading from memory.

2. **Decoding** or translating the instructions into a form the CPU can understand, which is machine language (binary).

3. **Executing** and carrying out the given instructions.

4. **Storing** the result of the execution back to memory for later retrieval if and when requested. This is also called writing to memory.

<p align="center">
  <img width="100%" height="100%" src="https://www.techspot.com/articles-info/2000/images/2020-04-06-image.png">
</p>

**Components of the CPU:**

1. **CU (Control Unit)**: Regulates the flow of input and output. It fetches and retrieves the instructions from main memory and later decodes them.

2. **ALU (Arithmetic Logic Unit)**: Part where all the processing happens. Here is where all mathematic calculations take place, such as addition, subtraction, multiplication, and division, as well as all the logical operations for decision making, such as comparing data.

3. **Registers**: An extremely fast memory location. The data and instructions that are currently being processed during the fetch-execute cycle are stored there, for quick access by the processor.

# Brief
We have learn much about Processes and Threads. By that, you should able to know the key points of Processes and Threads.

- Create a table to differentiate between threads and processes
- Create another table to differentiate between multi-threading and multi-processing

You may use any resources available online for research and create your own differentiation of the two concepts.

# Differences between Threads and Process

| Feature | Threads | Process |
| ------------- | ------------- | -------------|
| Definition  | Smallest unit of execution within a process	  | Independent unit of execution in the operating system |
| Resource Allocation | Share resources of process | Allocate new resources each time we run a program |
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
| Basic Unit  | Threads  | Each process has its own memory space |
| Creation | Thread creation is time and resource economical | Process creation is slow and resource-specific |
| Memory  | Shares memory space  | Processes |
| Execution  | Threads of a single process execute concurrently  | Allows the execution of multiple processes concurrently |
| Example  |In a web server, multiple threads handle different client requests within the same process | In a video rendering application, multiple processes render different frames of a video simultaneously |


# Resources & References
- Credits to Wong Tsang Han, Keren Priyadarshini and Xin Wang for contributing to some of these ideas