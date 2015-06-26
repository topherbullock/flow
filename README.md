# flow : Node.js Enterprise Integration Flows

![So yo the N what the .JS, incorporate O-D-E into a flow](http://37.media.tumblr.com/tumblr_lyubxrCwb41qfwa93o1_400.gif)

Stream-lined Enterprise Integration patterns using Node***(I/O,or/whatever)***.js


##Example system design


Diagram of example system design for first iteration of this project.
Only covering a small subset of the patterns defined in Enterprise (Integration Patterns)[http://www.enterpriseintegrationpatterns.com/]


```
   +-----------------+                        
   | Readable Stream | +                      
   +-----------------+ |                      
                       |        +------------+
                       +-------->  Message   |
+------------+                  |  Endpoint  |
|  Message   |  +-----------+   +------+-----+
|  Endpoint  +v-+           |          |      
+------------+  |  Channel  +^----+    +      
                |           |     |(message)  
+-----------+   +-----------+     |    +      
| Writeable +^-------+            |    |      
| Stream    |        |            +----v----+ 
| (eg. ssl)   +------+-------+    |         | 
+-----------+ |   Message    +^---+ Router  | 
              |   Endpoint   |    |         | 
              +--------------+    +---------+ 

```




##Message formatting 
* content type : text | application/json etc.
* content format : syntax format and revision
* host: IP 
* client: IP
* sender_id: identifier for client when communicating with broker type hosts
* recipient_id: identifier for host when communicating with broker type hosts

Use in distrobuted systems to communicate in standard format between pipes. Messages pass through system via streams and are translated at the message endpoint level.

