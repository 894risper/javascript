class Rectangle{
constructor( width,height,color){
this.width=width;
this.height=height;
this.color=color;

}
//method
area(){
return this.width * this.height;

}


}
const myRectangle1= new Rectangle(5,10,"blue");
const myRectangle2=new Rectangle(4,6,"red");

document.getElementById("demo").innerHTML= "the area of the rectangle1 is:" +myRectangle1.area()+ " and the color is:" + myRectangle1.color;
document.getElementById("demo2").innerHTML="the area of rectangle2 is:"+ myRectangle2.area()+ " and the color is " +myRectangle2.color;