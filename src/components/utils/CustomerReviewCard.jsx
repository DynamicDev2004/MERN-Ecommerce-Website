import React from 'react'
import { MdVerifiedUser } from "react-icons/md";

function CustomerReviewCard({img, name, content}) {
  return (
 <div>
                  <div className="flex font-primary gap-3 border-b py-4">
                    <div className="flex">

                    </div>
                    <div className="min-w-10 min-h-10 max-w-10 max-h-10 rounded-full overflow-hidden">
                      <img
                        className="object-cover w-full h-full"
                        src={img}
                        loading='lazy'
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-md font-semibold text-darkGray">
                        {name}
                      </span>
                      <span className="text-xs text-green-600 flex items-center justify-start gap-1">
                        <MdVerifiedUser size={15} />
                        Verified Purchase
                      </span>
                      
                      <p className="text-xs mt-2 text-lightGray">{content}</p>
                    </div>

                    
                  </div>
                </div>
  )
}

export default CustomerReviewCard