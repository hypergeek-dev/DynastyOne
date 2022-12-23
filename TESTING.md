![logo](https://user-images.githubusercontent.com/96884287/208438028-a9e2d873-7a6d-4bc2-acb1-d77b0cd2ecfa.png)
(Jingle Bingle Logo)
---

![Screenshot 2022-12-19 085114](https://user-images.githubusercontent.com/96884287/208438034-30d87d8c-08aa-4ae3-b37d-dbd5b39a6efa.png)

# Testing

--- 
 
### Summary


Testing is required on the Jingle Bingle to ensure the responsiveness of the website.

As this project is static and contains no back-end functionality, the testing performed will be on the visual effect and layout of the website. 

Testing is to be done on at least three web browsers and all screen sizes. No elements should overlap another container div. 

All elements should remain on the screen at all sizes above 320. All nav links should direct to the correct HTML pages as per their names. 

The home page is the exception, this one will redirect to index.html. 

All links to the external website must open in a new browser.

Testing of form validation will also be required to ensure the correct inputs are taken and that all fields are required. 

Validation of inclusion for all features included in the structure of the website/Wireframes must be performed.

The live project can be found [here.](https://vasi012.github.io/DynastyOne/)

---

## Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in WCAG 2.1 Reflow criteria for responsive design on Chrome, Edge, Firefox, and Opera browsers.

Step to test:
1.	Open the browser and navigate to Jingle Bingle
2.	Open the developer tools (right-click and inspect / F12)
3.	Set to responsive and decrease width to 320px.
4.	Set the zoom to 50%.
5.	Click and drag the responsive window to maximum width.

Expected:

The website is responsive on all screen sizes and no images are pixelated or stretched.

No horizontal scroll is present. No elements overlap (Apart from the image used as a background present in all the pages. The image can be seen on a desktop.)

All the code it's verified using W3 Verificatory for CSS and HTML, but there are some errors that have been found. However, these errors don’t have high importance at this time as we are pressured by the deadline. Therefore, we didn’t have enough time to fix them all, however, most of the errors have been fixed and those errors that have not been fixed are not affecting the website in any way.

We have run a test in W3C Validator for CSS (https://jigsaw.w3.org/css-validator/) to ensure that there are no errors that might affect the code.
We have conducted responsiveness tests on each HTML page via W3C Validator (https://validator.w3.org/) to ensure the responsiveness of the code and to prevent any errors.

index.html
![html check](https://user-images.githubusercontent.com/96884287/208450282-dfd4a685-2865-4978-9540-7cb717279ed5.png)

No important errors have been seen here, apart from BTN wich works with JS to allow users to stop and start a song.

aboutus.html![about](https://user-images.githubusercontent.com/96884287/208450301-0f2d7b4d-5d2c-4fb5-aaa4-7a81b0d69ffd.png)

On the about us we have found 5 errors as the element a dosen't support to be a child of the element figure. However it still works and as we are preesed by the time we decided to leave it like that. 

Createacard.html ![createcard](https://user-images.githubusercontent.com/96884287/208450315-51e53372-8d80-4ac4-b602-75c4d99ff168.png)

Some errors have been found here as we should use the same ID as the 'for' tag, however the ID used are conected to JavaScript. And we didn't want to break the code before deployment. THiss will be changed in the future. 


404.html ![Color Checker](https://user-images.githubusercontent.com/96884287/208450503-1543ae80-8a28-4ca9-96a2-145f693e1a56.png)

No errors here.

Actual:

The website was also opened on the following devices and no responsive issues were seen:

    -iPhone 14 Pro Max - Phone
    
    -iPhone 13 Pro Max - Phone
    
    -iPod Pro - Tablet
    
    -MacBook Pro - Laptop
    
    -ASUS - Laptop

## Accessibility

Wave Accessibility tool was used throughout the development and for the final testing of the deployed website to check for any aid accessibility testing.
Testing was focused to ensure the following criteria were met:
1.	All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs.
2.	Colour contrasts meet a minimum ratio as specified in WCAG 2.1 Contrast Guidelines.
3.	Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user.
4.	All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions.
5.	All not textual content had alternative text or titles, so prescriptions are read out to screen readers.
6.	HTML page lang attribute has been set.
7.	Aria properties have been implemented correctly.
8.	WCAG 2.1 Coding best practices being followed.

Manual tests were also performed to ensure the website was accessible.

index.html

The home page was tested using WAVE.
![home](https://user-images.githubusercontent.com/96884287/208450590-399c8b6c-6488-4f37-b957-ee2c4d2eb3a0.png)

On the home page there was an error that has been fixed.
The contrast error is becouse of the front headline, as the headline is empty and filled up with ''gold foil'' using js. 

aboutus.html

The About Us page was tested using WAVE.
![Screenshot 2022-12-19 085740](https://user-images.githubusercontent.com/96884287/208450611-0a3f6e54-5b35-4040-aeef-09c7702c2a1d.png)

On the about us page we have 5 errors, this errors are becouse of the use of a icon instead of text. This issue can be fix easily however, as we are very pressed by the time we didn't got a chance to fix it. Will be fixed in future updates.

Createacard.html

The Contact Us page was tested using WAVE.
![createacard](https://user-images.githubusercontent.com/96884287/208450619-c4f405aa-7ee9-4a46-8ae7-5e95eaa3ea28.png)

The createacard.html has a single error becouse of the empty headline used to allow users to fill up with what they will like to. We thought of using some placeholders but we wanted to offer a good UX experience and allow the users to make the decisions. 
However, this error dosen't affect in any way the user.

404.html

The 404 page was tested using WAVE.
We can observe that there are not any errors, and the contrast ratio is met with success.
![404p](https://user-images.githubusercontent.com/96884287/208450629-b4a2c95a-6fb0-4324-9222-298d0c7b1a92.png)

Lighthouse Testing

We have conducted checks using Lighthouse Testing, the first rapport being 86% can be caused by the speed of the internet / old devices.
Using the website, we won't find any issues and we can confirm that the website it's responsive on every device.

Functional Testing

Navigation Links
Testing was performed to ensure all navigation links on the respective pages, navigated to the correct pages as per design.
This was done by clicking on the navigation links on each page.


JS HINT

Some tested were conducted using JSHint in order to check the JavaScript code, however no issues have been seen here apart from the ES6 issues that are caused by the browser.

The other 2 files are not our code, it is borrowed from canvas / google. Therfore no testing has been done. 

![index html](https://user-images.githubusercontent.com/96884287/208450681-de1fa2fd-6842-46ff-b128-b4ada465ab91.png)


Navigation Link

Home

About Us

Create A Card

Page to Load

index.html

about.html

card-form.html

Links on all pages navigated to the correct pages as expected.


# Unfixed Bugs

On a desktop page in index.html when clicking on the next button in the slider the website pushes you up by 10%.
And other. However, as previewsly mentionated, becouse of the short time we haven't performed to much tests, however the website works as expected, and will be fixed in future updates.
---

## Acknowledgments


Firstly I would like to thank everyone for the great work that has been put into this project, well done everyone. 
Secondly, I would like to apologies for the multiple errors that have occured in the website. We will make sure that thiss errors will not be presented in the final version of the website (which will be posted after wednesday, once we rechieve our grade). 

And thirdly and not the last, it was an amazing time well spent with a great team where all of us were juniors, some of us just joined the course, we had fun and we really done a great job. 

# Merry Christmas! 
