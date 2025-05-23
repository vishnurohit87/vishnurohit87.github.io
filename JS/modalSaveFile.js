var modalSaveFile = [
      // ["Modeling and Simulation of Three link Biped using Hybrid Zero Dynamics",
      // "three_link_biped",
      // "project_three_link_biped.png",
      // "The control of a bipedal system is a challenging and complex problem that requires a powerful solution. The method of Hybrid Zero Dynamics developed at the University of Michigan is one such solution. This paper details the complete implementation of the hybrid zero dynamics of a three-link biped through the development of the kinematics, dynamic modeling, and controller design. Using the zero dynamics of our derived model, we find an energy efficient gait design, and integrate the full dynamics with a PD controller. These results are then verified with a step simulation.",
      // "Read the writeup!",
      // "http://github.com/jpsnir/portfolio_projects/"],
    
    ["Real-Time Plant Health Detection using IR Cameras",
      "depth_reconstruction",
      "ndvi.png",
      "This project primarily focuses on determination of plant health by calculating a parameter called ‘Normalized Difference Vegetation Index’ using the captured IR images from a sensing & navigation unit. The project is implemented using a NoIR (No-Infrared) camera for determining plant health. The aim of the project is to create a system for tracking health conditions of plants in indoor environments such as a greenhouse, lab, etc. The initial trial was performed in Northeastern University’s campus where both live and dead plants were scanned to test the NDVI results.",
      "More on GitHub!",
      "https://github.com/vishnurohit87/Plant-Health-Determination-using-NoIR-Camera-and-Implementing-vSLAM.git"],  

    ["Convolutional Neural Network from Scratch using NumPy",
    "CNN",
    "cnn.png",
    "A simple Convolutional Neural Network (CNN) for image classification written from scratch using Numpy. Trained on CIFAR10 dataset. Architecture: [conv - bn - relu] x M - global_average_pooling - affine - softmax. Worked on this project to understand the working of each individual compoent in a CNN. The implementation all the layers used in the network can be found in utils/layers.py",
    "See more on GitHub!",
    "https://github.com/vishnurohit87/ConvNet_Numpy.git"],
      
    ["Image Registration and 2D Visual Odometry on Low-Contrast Underwater Imagery",
     "2d_visual_odom",
     "visual_odom.png",
     "Performed of visual image registration with classical feature point based methods and deep learning methods on low contrast and low texture environments. The solution was further optimized using GTSAM.",
     "Read more!",
     "N/A"],

    ["IMU and GPS Sensor Fusion for Automotive Dead Reckoning",
     "sensor_fusion",
     "deadreckoning.png",
     "Compared the estimated position over time of a car driven through Boston calculated using dead reckoning to a ground truth given by GPS. Performed sensor fusion by implementing Extended Kalman Filtering (EKF) to get an improved estimate of vehicle’s overall trajectory including GPS-lacking environments.",
     "See the IMU dead reckoning Github!",
     "https://github.com/vishnurohit87/IMU-GPS-Sensor-Fusion.git"],
    
    ["Autonomous Disaster Response and Reconnaissance Bot | Lidar & vSLAM",
     "mobile_robot",
     "mr.png",
     "Autonomous reconnaissance in a simulated disaster scenario. Specifically, when introduced into a closed but initially unknown environment, the system accomplishes the following: 1. Generate a complete map of the environment; 2. Locate any victims present in the environment. For the purposes of this exercise, the environment is represented using an occupancy grid map, and AprilTags are used as stand-ins for simulated victims. Our objective is to deploy a TurtleBot3 in an unknown environment filled with AprilTags at randoom locations in random poses. The TurtleBot must generate a comprehensive map of the area while also identifying and cataloguing all the AprilTags present, including their unique ID numbers and absolute poses relative to the generated map.",
     "See the demo video!",
     "https://www.youtube.com/watch?v=UkpYMUttDLI"],

    ["Photorealistic 3D Scene Reconstruction using Gaussian Splatting and NeRFs",
    "gaussian_splatting",
    "gaussian_splatting.png",
    "This project involved generating photorealistic 3D representations of multiple indoor and outdoor scenes to benchmark various 3D Gaussian Splatting and Neural Radiance Fields (NeRFs) frameworks using custom multi-view RGB image datasets. I trained models using sparse point clouds and calibrated camera poses generated via Structure-from-Motion (SfM) in COLMAP, and systematically evaluated scene renderings for visual fidelity and completeness. ",
    "Read more!",
    "N/A"],

    ["Semantic Segmentation of Road Cracks using Swin Transformer",
      "swinTransformer",
      "cracks.png",
      "The goal of this project was to perform semantic segmentation on images of roads to accurately detect and segment cracks. This is crucial for automating road inspection and maintenance workflows. The model utilizes a Swin Transformer (Tiny variant) as the backbone, integrated into a UPerNet (Unified Perceptual Parsing) architecture, trained using a combination of 2 losses: Cross-Entropy Loss was used in the early stages of training, followed by the Lovasz-Softmax Loss.",
      "See more on GitHub!",
      "https://github.com/vishnurohit87/Swin-Transformer-Crack-Segmentation.git"],

    ["Structure from Motion (SFM) from Scratch | 3D PointCloud Reconstruction from 2D Images",
      "SFM",
      "sfm.png",
      "This project implements a Structure from Motion (SfM) pipeline for 3D reconstruction from a series of 2D images from scratch. The pipeline includes an initial triangulation of 2D image points into 3D space using classical computer vision methods and optimization using the GTSAM library.",
      "See more on GitHub!",
      "https://github.com/vishnurohit87/Structure_From_Motion.git"],
      
     ["Multi-UAV Formation Control for Dynamic Target Tracking",
      "formation_flying",
      "ffc.png",
      "A multi-uav formation control algorithm with collision avoidance for tracking a dynamic target. Developed for multirotors running on ArduCopter, this system uses ROS2 to get GPS coordinates of the target and mavlink is used for communicating with the UAVs.",
      "See the simulation on GitHub!",
      "https://github.com/vishnurohit87/Multi-UAV_Formation_Control.git"],

];




