# markoshust:owl-carousel-2

## Add Owl Carousel 2 to Meteor

`meteor add markoshust:owl-carousel-2`

Be sure to add the `jquery` package so you may initiate the carousel.

## Usage

Add the following to your onRendered (blaze) or componentDidMount (react) function:

```
$('.owl-carousel').owlCarousel();
```

... and setup your carousel HTML:

```
<div ref='owl-carousel'>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
</div>
```

## Documentation

See the <a href="http://www.owlcarousel.owlgraphic.com/" target="_blank">Owl Carousel 2 website</a> for more details.
