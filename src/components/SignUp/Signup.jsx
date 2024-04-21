import React from "react";

function Signup() {
  return (
    <>
     <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    
        <div className="sm:mx-auto sm:w-full sm:max-w-sm" >
          <img
            className="mx-auto h-10 w-auto"
            src="https://img.freepik.com/free-vector/shopping-cart_23-2147503155.jpg?t=st=1713707846~exp=1713708446~hmac=cd5acc6586b8c34e0c9f680a606d96c9c1ae004fcd38afe684a9af8201197533"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            SignUp to NexTrove
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="mt-2">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#000000"
                    fill="none"
                  >
                    <path
                      d="M2 5.5L8.91302 9.42462C11.4387 10.8585 12.5613 10.8585 15.087 9.42462L22 5.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.5 19.9959C11.0337 19.9898 9.56682 20.0077 9.09883 19.9959C5.95033 19.9166 4.37608 19.877 3.24496 18.7394C2.11383 17.6018 2.08114 16.0661 2.01577 12.9947C1.99475 12.0071 1.99474 11.0254 2.01576 10.0378C2.08114 6.96642 2.11382 5.43072 3.24495 4.29312C4.37608 3.15551 5.95033 3.11588 9.09882 3.03663C11.0393 2.98779 12.9607 2.98779 14.9012 3.03664C18.0497 3.1159 19.6239 3.15553 20.755 4.29313C21.8862 5.43073 21.9189 6.96643 21.9842 10.0378C21.9983 10.6973 22.0029 10.3542 21.9982 11.012"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.015 14.3866C16.0876 13.7469 17.0238 14.0047 17.5863 14.4153C17.8169 14.5837 17.9322 14.6679 18 14.6679C18.0678 14.6679 18.1831 14.5837 18.4137 14.4153C18.9762 14.0047 19.9124 13.7469 20.985 14.3866C22.3928 15.2261 22.7113 17.9958 19.4642 20.3324C18.8457 20.7775 18.5365 21 18 21C17.4635 21 17.1543 20.7775 16.5358 20.3324C13.2887 17.9958 13.6072 15.2261 15.015 14.3866Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <input type="text" className="grow" placeholder="Email" />
                </label>
              </div>
            </div>

            <div>
              <div className="mt-2">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#000000"
                    fill="none"
                  >
                    <path
                      d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                  <input type="text" className="grow" placeholder="Name" />
                </label>
              </div>
            </div>

            <div>
              <div className="mt-2">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#000000"
                    fill="none"
                  >
                    <path
                      d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                  <input type="text" className="grow" placeholder="Location" />
                </label>
              </div>
            </div>

            <div>
              <div className="mt-2">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#000000"
                    fill="none"
                  >
                    <path
                      d="M14.491 15.5H14.5M9.5 15.5H9.50897"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input
                    type="Password"
                    className="grow"
                    placeholder="Password"
                  />
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
