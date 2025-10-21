import Constraint from "@/components/Constraint"

type DataType = {
    first_name: string,
    last_name: string, 
    email: string,
    phone: string,
    address: string
    city: string,
    state: string,
    country: string
}

const DisplayClient = ({ userData }: {userData: DataType}) => {

  return (
    <div className="bg-gray-50 py-10 min-[1000px]:py-20">
        <Constraint size="960px">
            <div>
                <h1 className="mb-5 font-semibold text-xl">Account Overview</h1>
                <button></button>
            </div>
            <div className="bg-white p-4 rounded-lg mb-10 shadow-md border border-gray-100">
                <h2 className="text-lg text-btn-3 font-medium border-b border-gray-100 pb-2 mb-4">Personal Information</h2>
                <div className="px-2 min-[480px]:px-10 flex flex-wrap gap-8 min-sm:justify-between">
                    <div>
                        <span className="text-[14px] text-gray-700">First Name</span>
                        <p className="text-btn-2">{userData.first_name}</p>
                    </div>
                    <div>
                        <span className="text-[14px] text-gray-700">Last Name</span>
                        <p className="text-btn-2">{userData.last_name}</p>
                    </div>
                    <div>
                        <span className="text-[14px] text-gray-700">Email</span>
                        <p className="text-btn-2">{userData.email}</p>
                    </div>
                    <div>
                        <span className="text-[14px] text-gray-700">Phone</span>
                        <p className="text-btn-2">{`(+234) ${userData.phone}`}</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-lg text-btn-3 font-medium border-b border-gray-100 pb-2 mb-5">Billing Information</h2>
                <div className="px-2 min-[480px]:px-10 flex flex-wrap gap-8 min-sm:justify-between">
                    <div>
                        <span className="text-[14px] text-gray-700">Address</span>
                        <p className="text-btn-2">{userData.address}</p>
                    </div>
                    <div>
                        <span className="text-[14px] text-gray-700">City</span>
                        <p className="text-btn-2">{userData.city}</p>
                    </div>
                    <div>
                        <span className="text-[14px] text-gray-700">State</span>
                        <p className="text-btn-2">{userData.state}</p>
                    </div>
                    <div>
                        <span className="text-[14px] text-gray-700">Country</span>
                        <p className="text-btn-2">{userData.country}</p>
                    </div>
                </div>
            </div>
        </Constraint>
    </div>
  )
}

export default DisplayClient