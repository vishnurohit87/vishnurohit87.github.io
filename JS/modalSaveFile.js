var modalSaveFile = [
      ["Covariance recovery from a deep learning VSLAM solution using principles in non linear optimization",
      "covariance_recovery",
      "covariance_recovery.png",
      "To fuse the VO solution from pretrained VO engine, we need to get the scaled covariance from DROID SLAM engine."+
      "In a general non-linear regression problem shown on the right, information of the optimal solution can be recovered from the knowledge of the jacobians at optimal point and the noise. 
      "Inverse of the information matrix is the covariance." + 
      " After we recover the information of the obtained solution, we need to introduce gauge freedom for maintaining consistency in the covariances." + 
      "The VO solution is ill defined in scale so the covariance should be defined only for 5 degrees of freedom." +
       "Once we obtain the information matrix of the VO solution, we can fuse it with the IMU measurements" ,
      "Github will be released soon!",
      "https://github.com/jpsnir/portfolio_projects"],
      
     ["Applicability of deep learning based SLAM solution for visually-degraded underwater applications",
      "droid_slam",
      "droid_slam.png",
       "We selected DROID SLAM a deep learning based visual navigation framework for this task which is trained on Tartan Air dataset. DROID SLAM has a mix of deep learning based design along with elements of classical data association techniques in terms of co-visibiilty graph and image features are extracted using an encoder decoder networks from different image scales and stored in the correlation pyramid which are then sent into GRU layer, part of the update. The DBA layer is just minimizing the cost function of the predicted optical flow subtracted from the reprojected flow from a collection of co-visible frames to find the most consistent set of features, thereby making the whole pipeline robust to dynamic objects and noise in the image."
      "See the video here!",
      "https://github.com/jpsnir/portfolio_projects/"],
];
