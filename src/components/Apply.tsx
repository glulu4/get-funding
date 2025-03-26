import MyButton from "./ui/MyButton";


export default function Apply() {
    return (
            <div className="px-6 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-5xl text-center space-y-8">
                    <h2 className="text-5xl sm:text-6xl font-semibold text-primaryGreenDark ">
                        Apply Now
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
                        Ready to take the next step? Apply now to get started on your journey to financial freedom.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                 <MyButton
                 arrow
                   text="Apply Now"
                   href="/apply"
                 />

                    </div>
                </div>
            </div>
    )
}
