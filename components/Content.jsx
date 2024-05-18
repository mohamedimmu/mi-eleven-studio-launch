"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import axios from "axios";
import { toast, Toaster } from "sonner";

const Content = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async(e) => {

    try {
      const response = await axios.post('/api/form', { email, phone }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
        toast("Successfully Subcribed", {
          description: "Thanks for your trust",
        })
        console.log("s", response);

      } catch(error){
        console.log("Something went wrong");
      } 
  };


  return (
    <div className="flex items-center justify-center flex-col text-foreground text-base -mb-4 relative px-4 md:px-8 ">
      <p className="mb-2">We are still</p>
      <h2 className="font-bold font-poppins text-center text-3xl md:text-4xl lg:text-7xl mb-8">Cooking our site</h2>
      <div className="text-center">
        <p className="mb-2">We are going launch the website very soon.</p>
        <p>Stay Tune</p>
      </div>
      <Toaster />
      <Dialog className="rounded-3xl">
        <DialogTrigger asChild>
          <Button className="bg-purple-800 mt-5 rounded-3xl absolute z-10 -bottom-16" size="lg">
            <Mail className="mr-2 h-4 w-4" />
            Notify Me
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] !rounded-3xl">
          <DialogHeader>
            <DialogTitle>Subscribe to MI ELEVEN STUDIO</DialogTitle>
            <DialogDescription>
              We will notify you of special offers to help develop your
              business.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="col-span-3"
              />
            </div>
          </div>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={handleSubmit}
                type="submit"
                className="rounded-3xl bg-purple-800"
              >
                Submit
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Content;
