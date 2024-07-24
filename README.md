<div align="center">
  <img src="https://avatars.githubusercontent.com/u/92730708?s=96&v=4" /> 
  <h1>Web-Components Library Template</h1>
</div>

<p align="center">
  <a href="https://mia-platform.eu/?utm_source=referral&utm_medium=github&utm_campaign=micro-lc">
    <img src="https://img.shields.io/badge/Supported%20by-Mia--Platform-green?style=for-the-badge&link=https://mia-platform.eu/&color=DE0D92&labelColor=214147" alt="Mia-Platform"/>
  </a>
</p>

Boilerplate for a Web-Components library flavoured to be used in [micro-lc](https://micro-lc.io/docs).

## Whats inside

> TODO

## Local development

> TODO

## Use in micro-lc

> TODO

---

## DevOps console

This walkthrough will explain you how to correctly create a web-components library from the DevOps Console.

### Create a microservice

Access your [Mia-Platform DevOps Console](https://console.cloud.mia-platform.eu/login), create a new project, and go to the **Design** area.

From the Design area of your project, select _Microservices_ and then create a new one, you have now reached [Mia-Platform Marketplace](https://docs.mia-platform.eu/development_suite/api-console/api-design/marketplace/)!
In the marketplace you will see a set of Examples and Templates that can be used to set-up microservices with a predefined and tested function.

For this walkthrough select the following template: **micro-lc Web-Components Library Template**.
Give your microservice the name you prefer, in this walkthrough we'll refer to it with the following name: **micro-lc-wx-library-template**. Then, fill the other required fields and confirm that you want to create a microservice.  
A more detailed description on how to create a Microservice can be found in [Microservice from template - Get started](https://docs.mia-platform.eu/development_suite/api-console/api-design/custom_microservice_get_started/#2-service-creation) section of Mia-Platform documentation.

### Expose an endpoint to your microservice

In order to access to your new microservice it is necessary to create an endpoint that targets it.  
In particular, in this walkthrough you will create an endpoint to your microservice *micro-lc-wc-library-template*. To do so, from the Design area of your project select _Endpoints_ and then create a new endpoint.
Now you need to choose a path for your endpoint and to connect this endpoint to your microservice. Give to your endpoint the following path: **/micro-lc-wc-library**. Then, specify that you want to connect your endpoint to a microservice and, finally, select *micro-lc-wc-library-template*.  
Step 3 of [Microservice from template - Get started](https://docs.mia-platform.eu/development_suite/api-console/api-design/custom_microservice_get_started/#3-creating-the-endpoint) section of Mia-Platform documentation will explain in detail how to create an endpoint from the DevOps Console.

### Save your changes

After having created an endpoint to your microservice you should save the changes that you have done to your project in the DevOps console.  
Remember to choose a meaningful title for your commit (e.g 'created service micro_lc_web-components-library'). After some seconds you will be prompted with a popup message which confirms that you have successfully saved all your changes.  
Step 4 of [Microservice from template - Get started](https://docs.mia-platform.eu/development_suite/api-console/api-design/custom_microservice_get_started/#4-save-the-project) section of Mia-Platform documentation will explain how to correctly save the changes you have made on your project in the DevOps console.

### Deploy

Once all the changes that you have made are saved, you should deploy your project through the DevOps Console. Go to the **Deploy** area of the DevOps Console.  
Once here select the environment and the branch you have worked on and confirm your choices clicking on the *deploy* button. When the deploy process is finished you will receive a pop-up message that will inform you.  
Step 5 of [Microservice from template - Get started](https://docs.mia-platform.eu/development_suite/api-console/api-design/custom_microservice_get_started/#5-deploy-the-project-through-the-api-console) section of Mia-Platform documentation will explain in detail how to correctly deploy your project.

### Try it

Now, if you launch the following command on your terminal (remember to replace `<YOUR_PROJECT_HOST>` with the real host of your project):

```shell
curl <YOUR_PROJECT_HOST>/micro-lc-wc-library/test-components.esm.js
```

you should see a your web-components code.

Congratulations! You have successfully learnt how to use our _micro-lc Web-Components Library_ Template on the DevOps Console!

