import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useFetcher } from "@remix-run/react";
import { Ref, useEffect, useRef, useState } from "react";
import { Overlay, TextArea } from "~/components";
import Input from "~/components/input";
import { CgCloseO } from "react-icons/cg";

const index = ({ overlay }: { overlay?: boolean }) => {
  const fetcher = useFetcher({ key: "add-to-queries" });
  const [contactModal, setContactModal] = useState(true);
  const formWindow = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const loading = fetcher.state === "submitting";

  useEffect(() => {
    let click = (e: any) => {
      if (formWindow.current && !formWindow.current.contains(e.target!)) {
        setContactModal(false);
      }
    };
    addEventListener("click", click, true);

    return () => {
      removeEventListener("click", click);
    };
  }, []);

  useEffect(() => {
    let drag = (e: any) => {
      setContactModal(false);
    };
    window.addEventListener("resize", drag, true);
    return () => {
      removeEventListener("drag", drag);
    };
  }, []);
  const submitHandler = () => {
    const formData = new FormData(formWindow.current!);
    const payload = {
      type: "contact",
      data: {
        firstname: formData!.get("firstname")!.toString(),
        lastname: formData!.get("lastname")!.toString(),
        email: formData!.get("email")!.toString(),
        subject: formData!.get("subject")!.toString(),
      },
    };
    fetcher.submit(payload, {
      method: "POST",
      encType: "application/json",
    });
  };

  useEffect(() => {
    let resData: { error: boolean; message: string; data?: any } | any =
      fetcher.data;

    if (resData) {
      // setErrorMessage(resData.message);
      if (resData.error) {
      } else {
        setContactModal(false);
        formWindow.current?.reset();
      }
    }
  }, [fetcher.data]);

  // const responseData: any = fetcher.data;
  // useEffect(() => {
  //   if (responseData) {
  //     responseData?.error
  //       ? setErrorMessage(responseData.message)
  //       : formWindow.current?.reset();
  //   }
  //   if (!responseData?.error) {
  //     setContactModal(false);
  //   }
  // }, [fetcher.data]);
  const Form = (
    <fetcher.Form
      className={`flex flex-col gap-3 rounded-lg bg-white p-8 pt-7 shadow-md ${
        overlay
          ? "bg-gradient-to-br from-gray-50 to-orange-50 shadow-lg rounded-2xl"
          : ""
      }`}
      ref={formWindow}
      method="POST"
    >
      {overlay && (
        <div className="flex items-center justify-between">
          <p></p>
          <CgCloseO
            size={20}
            className="text-orange-400 cursor-pointer hover:text-gray-500"
            onClick={(e) => {
              e.preventDefault();
              setContactModal(false);
            }}
          />
        </div>
      )}
      <div className="flex gap-6 flex-wrap flex-1">
        <Input lable="firstname" required={true}></Input>
        <Input lable="lastname" required={true}></Input>
      </div>
      <Input lable="email" type="email" required={true} />
      <TextArea lable="subject" required={true} />
      <p className="leading-4 text-red-400">{errorMessage}</p>
      <button
        className={`px-7 py-4 bg-orange-500 rounded-md uppercase font-medium text-white`}
        onClick={(e) => {
          e.preventDefault();
          submitHandler();
        }}
        // onClick={submitHandler}
      >
        {loading ? "please wait" : "submit"}
      </button>
    </fetcher.Form>
  );
  if (!overlay) {
    return Form;
  }
  if (overlay && contactModal) {
    return <Overlay children={Form} />;
  } else {
    return null;
  }
};

export default index;
