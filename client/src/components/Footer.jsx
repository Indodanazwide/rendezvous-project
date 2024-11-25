const Footer = () => {
    return (
        <footer>
            <section className="summary">
                <article>
                    <h3>About Us</h3>
                    <p>
                        Rendezvous Restaurant is a student-run establishment offering
                        wholesome, eco-friendly meals with a focus on training future
                        foodies. Located at Steve Biko Campus, we cater to your dining and
                        event planning needs.
                    </p>
                </article>

                <article>
                    <h3>Contact Us</h3>
                    <p>
                        <strong>Reservations and Enquiries:</strong>
                        <br />
                        Jane Visagie: janev@dut.ac.za, 031 373 2383
                        <br />
                        Jabu Chiya: 031 373 6695
                        <br />
                        Noxolo Blose: 031 373 2322
                    </p>
                </article>

                <article>
                    <h3>Operating Hours</h3>
                    <p>
                        <strong>First Semester:</strong> Wed & Thu: 11:00 - 14:00
                        <br />
                        <strong>Second Semester:</strong> Wed, Thu & Fri: 11:00 - 14:00
                    </p>
                    <p><strong>Meals-on-the-go:</strong> Mon - Fri</p>
                </article>
            </section>

            <hr />

            <section className="copyrights">
                <p>© 2024 Rendezvous Restaurant. Designed by DUT Students. All rights reserved</p>
            </section>
        </footer>
    )
}

export default Footer
