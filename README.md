

# JavaScript:  DOM manipulation

This project was created to develop and improve my skills in JavaScript DOM manipulation.


### The challenge
In this task I couldn't change content in HTML and CSS files. 
My job was to solve two problems using JavaScript:

1. Generating links with a tooltip after hovering the cursor over an element(text and image).
2. Generating a table of contents based on an array of objects.



### Solutions

#### Solution the 1st problem

Having the following structure, we need to modify the element with the .tooltip class in such a way that it generates the correct structure compliant with CSS:
````html
<span
    class="tooltip"
    data-url="https://pl.wikipedia.org/wiki/J%C4%99zyk_skryptowy"
    data-tooltip-type="text"
    data-tooltip-content="Język skryptowy (ang. script language) – język programowania obsługujący skrypty[1]. Często służący do kontrolowania określonej aplikacji."
>
    skryptowy
</span>
````

To solve this problem, I've used for loop, where I've set e.g. appropriate classes and attributes for new-created elements.


#### Solution the 2nd problem

In this case, I  used the forEach loop, but in the beginning I had to create the first level of the menu. After this, I've used querySelectorAll, to find new-created elements (li) and set them appropriate li elements as a second level of the list.


## Thanks :handshake:

Thanks to my [Mentor - devmentor.pl](https://www.devmentor.pl) - for providing me with this task and for code review.
