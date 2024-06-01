import User from "./User";

const About = () =>{
    return(
        <div className="h-screen  flex justify-center space-y-32 items-center flex-col ">
          <h1 className="font-bold text-7xl text-red-600">What is GoodFood 😋🍴 ?</h1>
          <h3 className="break-word mx-28 font-medium text-lg">
            <p className="mb-4">
            At GoodFood, we are passionate food enthusiasts dedicated to bringing the best dining experiences to your doorstep. Our mission is to connect you with a diverse array of local restaurants, offering an extensive selection of cuisines to satisfy every craving. We believe in the power of food to bring people together and enhance daily life, and we strive to make this as convenient and enjoyable as possible through our seamless online platform.
            </p>

<p className="mb-4">
Our team is committed to excellence in every aspect, from curating the finest restaurants to ensuring your orders are delivered promptly and accurately. We leverage cutting-edge technology to provide real-time tracking, secure payment options, and a user-friendly interface, all designed to make your food ordering experience effortless and enjoyable. At GoodFood, we're not just about delivering meals; we're about delivering moments of joy, comfort, and satisfaction to your table.
</p>

</h3>
        </div>
    )
}

export default About;