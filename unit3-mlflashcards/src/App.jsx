import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';
import React from 'react';
import { render } from 'react-dom';

const cards = [
  {
    model: 'K Nearest Neighbors',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote02_kNN.html',
    demoLink: 'https://vision.stanford.edu/teaching/cs231n-demos/knn/',
    diagram:
      'https://mlarchive.com/wp-content/uploads/2022/09/img2-3-1024x585.png',
    notes:
      'KNN is a type of instance-based learning, or lazy learning where the function is only approximated locally and all computation is deferred until function evaluation. KNN can be used for both classification and regression predictive problems. However, it is more widely used in classification problems in the industry. KNN algorithm at the training phase just stores the dataset and when it gets new data, it classifies that data into a category that is much similar to the new data. Euclidean distance is the most commonly used distance measure in KNN. Other measures can also be used depending on the nature of the data. The choice of K (number of nearest neighbors) can have a drastic impact on the performance of the model. A small value of K means that noise will have a higher influence on the result and a large value make it computationally expensive. KNN assumes that similar things exist in close proximity. In other words, similar things are near to each other.',
    assumptions: [
      'The dataset is free of noise',
      'The dataset is labeled',
      'The dataset only contains relevant features',
      "The dataset's distribution is non-parametric, meaning we don't make any assumptions about the data's structure",
      'Similarity is measured by the distance between data points. The closer the data points, the more similar they are',
    ],
    type: 'Discriminative Classification',
  },
  {
    model: 'The Perceptron',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote03.html',
    demoLink: 'https://mlweb.loria.fr/book/en/perceptron.html',
    diagram:
      'https://quicklearnology.com/wp-content/uploads/2023/03/Rosenblatts-perceptron.png',
    notes:
      "The Perceptron is a simple algorithm suitable for large scale learning. It's a type of linear Classification, i.e a classification algorithm that makes its predictions based on a linear predictor function combining a set of weights with the feature vector. The algorithm allows for online learning, in that it processes elements in the training set one at a time. The Perceptron is also used in supervised learning of binary Classifications. It's based on a slightly different concept than other Classifications, using a hyperplane to separate the different classes in the input vector space. The Perceptron algorithm dates back to the late 1950s and is the basis of a neural network.",
    assumptions: [
      '1. Linear Separability: The data it is trained on is linearly separable.',
      '2. Binary Classification: Perceptrons are designed for binary classification problems.',
      '3. Independence: Each feature in the data set is independent of all other features.',
      '4. Fixed Learning Rate: The learning rate is assumed to be fixed.',
    ],
    type: 'Discriminative Classification',
  },
  {
    model: 'K-Means Clustering',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/UnsupervisedLearning.html#:~:text=in%20the%20data.-,K%2Dmeans%20clustering,-Given%20a%20set',
    demoLink:
      'https://www.naftaliharris.com/blog/visualizing-dbscan-clustering/',
    diagram:
      'https://miro.medium.com/v2/resize:fit:1200/1*rw8IUza1dbffBhiA4i0GNQ.png',
    notes:
      'K-Means Clustering is an unsupervised learning algorithm that is used to solve the clustering problems in machine learning or data science. In K-Means Clustering, we have the specify the number of clusters we want the data to be grouped into. The algorithm randomly assigns each observation to a cluster, and finds the centroid of each cluster. Then, the algorithm iterates through two steps: Reassign data points to the cluster whose centroid is closest. Calculate new centroid of each cluster. These two steps are repeated till the within cluster variation cannot be reduced any further. The end result is that the sum of squared errors is minimized between points and their respective centroids.',
    assumptions: [
      'Clusters are spherical: All points within a cluster are homogeneous, or equally, distant from the centroid is assumed. This leads to the circular boundary in case of 2D data. Therefore, this algorithm works well when the clusters are spherical and of similar size.',
      'Clusters are of similar size: K-Means tends to produce clusters of similar size even if the input data have different cluster size.',
      'All features are equally scaled: K-Means is a distance-based algorithm, so it gives importance to the absolute magnitudes. If the scales of the features are different, then K-Means can get biased towards the features having higher magnitudes.',
      'The variance of the distribution of each attribute (variable) is spherical.',
      'All clusters have the same variance.',
    ],
    type: 'Unsupervised Clustering',
  },
  {
    model: 'Gaussian Mixture Model (GMM)',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/UnsupervisedLearning.html#:~:text=Relation%20to%20Gaussian%20mixture%20models%20%5BOptional%5D',
    demoLink: 'https://lukapopijac.github.io/gaussian-mixture-model/',
    diagram:
      'https://d3i8kmg9ozyieo.cloudfront.net/gaussian-mixture-models-0.png',
    notes:
      'Gaussian Mixture Models (GMMs) are a type of probabilistic model used for clustering, much like K-Means. However, unlike K-Means, GMMs take into account the covariance structure of the data as well as the centers of the latent Gaussians. GMMs are a lot more flexible in terms of cluster covariance than K-Means; due to the standard deviation parameter, the clusters can take on any ellipse shape, rather than being restricted to circles. GMMs can also be used to predict probabilities of events rather than rigid features. The GMM algorithm involves an iterative process where in each iteration it refines the parameters of the Gaussians.',
    assumptions: [
      'Data is Gaussian: The GMM algorithm assumes that all the data points are Gaussian distributed. This is the fundamental assumption of GMM.',
      'Data is unimodal or multimodal: GMM assumes that the data could be unimodal (single peak) or multimodal (multiple peaks).',
      'Independence: GMM assumes that there are no relationships among the features in the dataset.',
      'Sufficient data: GMM assumes that there is enough data available to create a covariance matrix. This is necessary for calculating the Gaussian distributions.',
    ],
    type: 'Unsupervised Clustering',
  },
  {
    model: 'DBSCAN',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote04.html',
    demoLink:
      'https://www.naftaliharris.com/blog/visualizing-dbscan-clustering/',
    diagram:
      'https://miro.medium.com/v2/resize:fit:1358/1*KqWII7sFp1JL0EXwJGpqFw.png',
    notes:
      'DBSCAN is a density-based clustering algorithm, with the capability to find arbitrary shape clusters and clusters with noise (outliers). It works on the concept of density reachability and density connectivity. DBSCAN groups together points that are close to each other in the feature space and have a sufficient number of neighbors. Points in low-density regions are classified as noise. Unlike K-Means or GMM, DBSCAN does not require the user to specify the number of clusters.',
    assumptions: [
      'Density: DBSCAN assumes clusters are dense regions in the data space separated by regions of lower object density.',
      'Noise: DBSCAN assumes that the dataset could contain noise, i.e., data points that are not part of the cluster.',
      'Arbitrary shape: DBSCAN can find clusters of arbitrary shapes. It can even find a cluster completely surrounded by a different cluster.',
    ],
    type: 'Unsupervised Clustering',
  },
  {
    model: 'MLE',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote04.html',
    demoLink:
      'https://chrispiech.github.io/probabilityForComputerScientists/en/examples/mle_demo/',
    diagram:
      'https://miro.medium.com/v2/resize:fit:1400/1*sdsMQgRofARtxbpai-YAEg.png',
    notes:
      'Maximum Likelihood Estimation (MLE) is a method of estimating the parameters of a statistical model. It does this by maximizing a likelihood function so that under the assumed statistical model the observed data is most probable. The point in the parameter space that maximizes the likelihood function is called the maximum likelihood estimate. MLE can be seen as a special case of the maximum a posteriori estimation (MAP) that assumes a uniform prior distribution of the parameters.',
    assumptions: [
      'MLE assumes that the data follows a specific statistical model.',
      'It assumes that the data is identically distributed, which means each data point follows the same probability distribution.',
      'It assumes that the data is independently distributed, which means each data point does not depend on any other data points.',
    ],
    type: 'Statistical Method',
  },
  {
    model: 'MAP',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote04.html',
    demoLink: 'https://www.example.com/demo/map',
    diagram:
      'https://i.ytimg.com/vi/jW_J-8S-gUc/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGEgWShlMA8=&rs=AOn4CLB7UW4OF4MDpu59GTBAFUoBIk6Wxg',
    notes:
      'Maximum A Posteriori (MAP) Estimation is a method of estimating the parameters of a statistical model. Unlike MLE, MAP takes into account a prior distribution of the parameters. The MAP estimate of the parameters is the mode of the posterior distribution, which is the likelihood times the prior distribution. MAP reduces to MLE if the prior distribution is uniform.',
    assumptions: [
      'MAP assumes that the data follows a specific statistical model.',
      'It assumes that the data is identically distributed, which means each data point follows the same probability distribution.',
      'It assumes that the data is independently distributed, which means each data point does not depend on any other data points.',
      'It assumes a prior distribution of the parameters.',
    ],
    type: 'Statistical Method',
  },
  {
    model: 'Naive Bayes',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote05.html',
    demoLink: 'https://www.example.com/demo/naivebayes',
    diagram:
      'https://miro.medium.com/v2/resize:fit:1400/1*39U1Ln3tSdFqsfQy6ndxOA.png',
    notes:
      'Naive Bayes is a classification technique based on Bayes’ Theorem with an assumption of independence among predictors. In simple terms, a Naive Bayes Classification assumes that the presence of a particular feature in a class is unrelated to the presence of any other feature. Even if these features depend on each other or upon the existence of the other features, all of these properties independently contribute to the probability that a particular fruit is an apple or an orange or a banana and that is why it is known as "Naive".',
    assumptions: [
      'Naive Bayes assumes that all features are independent from each other.',
      'It assumes that every feature contributes equally to the outcome.',
      'It assumes that the data is identically distributed, which means each data point follows the same probability distribution.',
      'It assumes that the data is independently distributed, which means each data point does not depend on any other data points.',
    ],
    type: 'Generative Classification',
  },
  {
    model: 'Logistic Regression',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote06.html',
    demoLink: 'https://www.example.com/demo/logisticregression',
    diagram:
      'https://www.natasshaselvaraj.com/content/images/2022/11/Picture2-1.png',
    notes:
      'Logistic Regression is a statistical model that in its basic form uses a logistic function to model a binary dependent variable. It is a type of regression analysis where the dependent variable is a binary variable and used for predicting the outcome of a categorical dependent variable based on one or more predictor variables. The estimates of the model are usually obtained by maximum likelihood estimation.',
    assumptions: [
      'Logistic Regression assumes that the data follows a binomial distribution.',
      'It assumes that the predictor variables are independent of each other.',
      'It assumes that there is a linear relationship between the logit of the response and the predictor variables.',
      'It assumes that there is no multicollinearity among the predictor variables.',
    ],
    type: 'Discriminative Classification',
  },
  {
    model: 'Gradient Descent',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote07.html',
    demoLink: 'https://www.example.com/demo/gradientdescent',
    diagram:
      'https://miro.medium.com/v2/resize:fit:1400/1*fWc_cUNDEn4LpS6aissyXA.jpeg',
    notes:
      'Gradient Descent is an optimization algorithm used to minimize some function by iteratively moving in the direction of steepest descent as defined by the negative of the gradient. In machine learning, we use gradient descent to update the parameters of our model.',
    assumptions: [
      'Gradient Descent assumes that the function is differentiable.',
      'It assumes that the optimal solution is reachable through a descending path in the function graph.',
    ],
    type: 'Statistical Method',
  },
  {
    model: 'Adagrad',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote07.html',
    demoLink: 'https://www.example.com/demo/adagrad',
    diagram:
      'https://miro.medium.com/v2/resize:fit:2560/1*XS0HIjd9m7gI0nnVBjid8A.jpeg',
    notes:
      'Adagrad is an algorithm for gradient-based optimization that adapts the learning rate to the parameters, performing smaller updates for parameters associated with frequently occurring features, and larger updates for parameters associated with infrequent features.',
    assumptions: [
      'Adagrad assumes that the function is differentiable.',
      'It assumes that the optimal solution is reachable through a descending path in the function graph.',
    ],
    type: 'Statistical Method',
  },
  {
    model: 'Newtons Method',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote07.html',
    demoLink: 'https://www.example.com/demo/newtonsmethod',
    diagram: 'https://i.ytimg.com/vi/-5e2cULI3H8/maxresdefault.jpg',
    notes:
      'Newtons Method is an optimization algorithm used to find the roots of a function. It uses the first and second derivative to find the roots. In machine learning, it can be used to optimize the loss function.',
    assumptions: [
      'Newtons Method assumes that the function is twice differentiable.',
      'It assumes that the function has a root.',
    ],
    type: 'Statistical Method',
  },
  {
    model: 'Linear Regression',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote08.html',
    demoLink: 'https://www.example.com/demo/linearregression',
    diagram:
      'https://www.voxco.com/wp-content/uploads/2021/11/Linear-Regression1.png',
    notes:
      'Linear Regression is a statistical model that examines the linear relationship between two (Simple Linear Regression ) or more (Multiple Linear Regression) variables — a dependent variable and independent variable(s). Linear relationship basically means that when one (or more) independent variables increases (or decreases), the dependent variable increases (or decreases) too.',
    assumptions: [
      'Linear Regression assumes that there is a linear relationship between the dependent and independent variables.',
      'It assumes that the residuals are normally distributed.',
      'It assumes that there is no multicollinearity among the independent variables.',
      'It assumes that the residuals are homoscedastic.',
    ],
    type: 'Regression',
  },
  {
    model: 'Support Vector Machine',
    lectureLink:
      'https://www.cs.cornell.edu/courses/cs4780/2024sp/lectures/lecturenote09.html',
    demoLink: 'https://www.example.com/demo/svm',
    diagram:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/SVM_margin.png/300px-SVM_margin.png',
    notes:
      'Support Vector Machine (SVM) is a supervised machine learning algorithm which can be used for both classification or regression challenges. However, it is mostly used in classification problems. In the SVM algorithm, we plot each data item as a point in n-dimensional space (where n is the number of features you have) with the value of each feature being the value of a particular coordinate. Then, we perform classification by finding the hyper-plane that differentiates the two classes very well.',
    assumptions: [
      'SVM assumes that the data it works with is in a specific format. Namely, it uses a series of binary labels to distinguish between data for different categories.',
      'It assumes that the data is linearly separable in a higher-dimensional space.',
    ],
    type: 'Discriminative Classification (and Regression)',
  },
];
function App() {
  // Required import for the math

  const [cardIndex, setCardIndex] = useState(0);

  // TODO: Get this to work
  const nextCard = () => {
    let nextIndex = -1;
    do {
      nextIndex = Math.floor(Math.random() * cards.length);
    } while (nextIndex == cardIndex);
    {
    }

    console.log(nextIndex);
    setCardIndex(nextIndex);
  };

  const prevCard = () => {
    setCardIndex(cardIndex == 0 ? cards.length - 1 : cardIndex - 1);
  };

  return (
    <>
      <div className="container inline">
        <h1 className="text-[40px]">Machine Learning Study Guide</h1>
        <h2>How well do you understand ML concepts from class?</h2>
        <h3>Number of cards: {cards.length}</h3>

        <Card
          model={cards[cardIndex].model}
          lectureLink={cards[cardIndex].lectureLink}
          demoLink={cards[cardIndex].demoLink}
          diagram={cards[cardIndex].diagram}
          notes={cards[cardIndex].notes}
          assumptions={cards[cardIndex].assumptions}
        />

        <button onClick={nextCard}>Next</button>
      </div>
    </>
  );
}

export default App;
