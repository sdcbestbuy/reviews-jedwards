# Reviews_Polancich
<h2>This is the Reviews Module</h2>

<h5>The Reviews Module Consists of Four Main Sub Modules:</h5>
- Overview
- Specifications
- Reviews
- Questions and Answers

The Reviews Module was the Primary focus as it has a Backend interface, that consist of endpoints for various Server routes that query an Amazon RDS database for imformation and then dynamically changes its contents for that certain queried product. 

Overview, Specifications, and Questions and Answers are Static components that were built in the final days to fill out the Best Buy Page. 

The purpose of this project was to build a dynamic Component that is hosted on Amazons AWS Elastic Beanstalk with an Amazon AWS RDS Database and Amazon AWS S3 Bucket. From there, A proxy server was then built to interact with components that were built by partner programmers on a team; that when combined fill out a replicated Best Buy Website that would be functional. The Main deployed Module's would then listen for actions from the proxy server environment and would respond with the proper data from Amazon's RDS.

Below you can find a Diagram of the structure of the Reviews Module.

![Image of Mind Map of Reviews Module](https://ibb.co/SNsNKY2)

Here is a Video of the Module in Action.

https://imgur.com/RFIFeSY - automatic!
![Video Of Module in Action](https://imgur.com/RFIFeSY)
