import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useFetcher } from "@remix-run/react";
import { Ref, useEffect, useRef, useState } from "react";
import { Overlay, TextArea } from "~/components";
import Input from "~/components/input";

const index = ({ overlay }: { overlay?: boolean }) => {
  const fetcher = useFetcher({ key: "add-to-queries" });
  const [contactModal, setContactModal] = useState(true);
  const formWindow = useRef<HTMLFormElement>(null);
  const loading = fetcher.state === "loading";

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
    if (fetcher.state === "idle") {
      formWindow.current?.reset();
    }
    if (fetcher.data) {
      setContactModal(false);
    }
  }, [fetcher.state]);
  const Form = (
    <fetcher.Form
      className="flex flex-col gap-3 rounded-lg bg-white p-8 shadow-md"
      ref={formWindow}
      method="POST"
    >
      <div className="flex gap-6 flex-wrap flex-1">
        <Input lable="firstname"></Input>
        <Input lable="lastname"></Input>
      </div>
      <Input lable="email" type="email" />
      <TextArea lable="subject" />
      <button
        className="px-7 py-4 bg-orange-400 rounded-md uppercase font-medium"
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
