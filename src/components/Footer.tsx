import Constraint from "./Constraint"

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-50 text-sm">
        <Constraint className="w-fit flex mx-auto gap-x-12 gap-y-8 flex-wrap py-12">
            <div>
                <h2 className="mb-4 text-white text-2xl font-semibold">Exclusive</h2>
                <p>Get 10% off your first order</p>
            </div>
            <div>
                <h3 className="mb-4 text-base text-white">Support</h3>
                <p className="mb-3">111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</p>
                <p className="mb-3">exclusive@gmail.com</p>
                <p>+234 907 2306 028</p>
            </div>
            <div>
                <h3 className="mb-4 text-base text-white">Account</h3>
                <a className="block mb-3" href="/login">Login</a>
                <a className="block mb-3" href="/signup">Register</a>
                <a className="block mb-3" href="/reset-password">Reset Password</a>
                <a className="block mb-3" href="">Cart</a>
                <a className="block mb-3" href="">Wishlist</a>
            </div>
            <div>
                <h3 className="mb-4 text-base text-white">Quick Link</h3>
                <a className="block mb-3" href="">Privacy Policy</a>
                <a className="block mb-3" href="">Terms Of Use</a>
                <a className="block mb-3" href="">FAQ</a>
                <a className="block mb-3" href="">Contact</a>
            </div>
            <div>
                <h3 className="mb-4 text-base text-white">Download App</h3>
                <p className="mb-3">Save $3 with App New User Only</p>
                <div className="flex gap-4">
                    <a href="" aria-label="Follow us on facebook">
                        <img className="" src="/icons/facebook.png" alt="" />
                    </a>
                    <a href="" aria-label="Follow us on instagram">
                        <img className="" src="/icons/instagram.png" alt="" />
                    </a>
                    <a href="" aria-label="Follow us on twitter">
                        <img className="" src="/icons/twitter.png" alt="" />
                    </a>
                </div>
            </div>
        </Constraint>
        <p className="text-center py-4 border-t border-gray-700 border-dashed">&copy; Exclusive 2025. All right reserved</p>
    </footer>
  )
}

export default Footer