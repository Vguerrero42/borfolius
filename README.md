# Welcome
  Source code for my portfolio. **First and foremost**, credits and thanks to **Takuya Matsuyama** and his [NextJS portfolio tutorial](https://www.youtube.com/watch?v=bSMZgXzC9AA). Following along with this tutorial helped me dive into Next and threejs with an intuitive workflow project-wide. 

    
## 'thing'

  The thing component started out as [this example](https://threejs.org/examples/?q=draw#webgl_buffergeometry_drawrange) from the threejs site as a stand in for the 'voxel-dog' asset from Mr. Matsuyama's source.My idea was to create different "images" using the point cloud and lines and have the points move to form the next image in real time.
  Some changes I made to the example were
  
  * Changing bounds to a circle instead of square.
  * line draw distance slowly oscillating , creates a sense of 'less polygons', visually helps the transition
  between images
  * superficial changes such as colors and blending
 
   **As of right now, the points are randomly generated with a random velocity assigned to each point's x y and z axis. It continues to move with constant speed / direction until collision with another point or edge of invisible sphere. If you watch it long enough it looks cool I promise.**

  Along with the images, i'd like to implement more 'rules' to allow art to be more 'intelligently'  generative. If you're reading this that most likely has not happened yet haha. 




## Technologies
  * [NextJS](https://nextjs.org/)
  * [ChakraUI](https://chakra-ui.com/docs/components/overlay/menu)
  * [Nodejs](https://nodejs.org/en/about/)
  * [threejs](https://threejs.org/) 



