import React from 'react'
import { Clock, Phone, MapPin, Leaf, GraduationCap, UtensilsCrossed, Calendar, Coffee, Wine, Sandwich, UtensilsCrossed as Meals, Cookie, Salad, Utensils, Map } from 'lucide-react'

const Home = () => {
    const menuCategories = [
        {
            name: 'Tasty Treats',
            description: 'Delightful desserts perfect for satisfying your sweet tooth.',
            icon: Cookie
        },
        {
            name: 'Sandwiches',
            description: 'Freshly made sandwiches with options for chips on the side.',
            icon: Sandwich
        },
        {
            name: 'Light Meals',
            description: 'Quick, flavorful bites ideal for a lighter meal.',
            icon: Salad
        },
        {
            name: 'Main Meals',
            description: 'Hearty, gourmet dishes featuring satisfying flavors and ingredients.',
            icon: Meals
        },
        {
            name: 'Cold Beverages',
            description: 'Refreshing cold drinks, juices, and smoothies to cool you down.',
            icon: Wine
        },
        {
            name: 'Hot Beverages',
            description: 'Warm, comforting beverages to enjoy with your meal or on their own.',
            icon: Coffee
        }
    ]

    return (
        <div className="homepage">
            <section className="hero">
                <article>
                    <h1>Rendezvous</h1>

                    <p>Savour the taste of our culinary creations, crafted with love and care to delight your senses.</p>
                </article>
            </section>

            <section className="about">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvfQ4EwEiN5bwMQojmZZamJS__eWebT26pA&s" alt="Rendezvous Restaurant Interior" />
                
                <article>
                    <h2>About Us</h2>

                    <p>
                        Welcome to Rendezvous Restaurant, a unique dining experience run by students 
                        from the Department of Food and Nutrition Consumer Science at DUT. Since 1984, 
                        we've been training the next generation of culinary professionals while serving 
                        delicious, wholesome meals to our community.
                    </p>

                    <div className="container">
                        <div className="card">
                            <GraduationCap />
                            <p>Student-run establishment with professional supervision</p>
                        </div>

                        <div className="card">
                            <Leaf />
                            <p>Eco-friendly packaging and sustainable practices</p> 
                        </div>
                    </div>
                </article>

            </section>

            <section className="menu">
                <article className="intro">
                    <h2>Our Menu</h2>

                    <p>
                        Experience our four-week cycle menu featuring wholesome, 
                        nutritious meals prepared by our student chefs.
                    </p>
                </article>

                <article className="container">
                    {
                        menuCategories.map((category, index) => {
                            const IconComponent = category.icon

                            return (
                                <div key={index}>
                                    <div>
                                        <IconComponent />
                                        <h3>{category.name}</h3>
                                    </div>

                                    <p>{category.description}</p>
                                </div>
                            )
                        })
                    }
                </article>

                <article className='cta'>
                    <p>View our complete menu with daily specials and prices</p>
                    
                    <a href="/menu"><button>Explore our menu</button></a>
                </article>
            </section>

            <section className="services">
                <article className="meals">
                    <UtensilsCrossed />
                    <h3>Meals on the Go</h3>
                    <p>
                        Enjoy our convenient ready-to-eat meals available Monday to Friday. 
                        Perfect for students and staff looking for wholesome, affordable options.
                    </p>
                </article>

                <article className="function">
                    <Calendar />
                    <h3>Function Planning</h3>
                    <p>
                        Let us assist with your function planning requirements. 
                        Contact us for customized menus and service options.
                    </p>
                </article>
            </section>

            <section className="contact">
                <article>
                    <h2>Visit Us</h2>

                    <div className="container">
                        <div>
                            <MapPin />
                            <p>Steve Biko Campus, Block S9, Level 4</p>
                        </div>
                        <div>
                            <Clock />
                            <div className="time">
                                <p>First Semester: Wed-Thu, 11:00-14:00</p>
                                <p>Second Semester: Wed-Fri, 11:00-14:00</p>
                                <p>Meals-on-the-go: Mon-Fri</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article>
                    <h2>Contact Us</h2>

                    <div className="container">
                        <div>
                            <p>For reservations and enquiries:</p>
                            <p>Jane Visagie</p>
                            <p>Email: janev@dut.ac.za</p>
                            <p>Tel: 031 373 2383</p>
                        </div>
                        <div>
                            <p>Additional Contacts:</p>
                            <p>Jabu Chiya: 031 373 6695</p>
                            <p>Noxolo Blose: 031 373 2322</p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Home