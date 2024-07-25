"use client";

import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbAlertCircle } from "react-icons/tb";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

const userTypes: ["user", "lawyer"] = ["user", "lawyer"];

const specializations = [
  { value: "corporate_law", label: "Corporate Law" },
  { value: "criminal_law", label: "Criminal Law" },
  { value: "family_law", label: "Family Law" },
  { value: "intellectual_property", label: "Intellectual Property" },
  { value: "tax_law", label: "Tax Law" },
  { value: "real_estate", label: "Real Estate" },
  { value: "employment_law", label: "Employment Law" },
  { value: "civil_rights", label: "Civil Rights" },
  { value: "imigration", label: "Imigration" },
  { value: "environmental_law", label: "Environmental Law" },
  { value: "bankruptcy", label: "Bankruptcy" },
  { value: "entertainment_law", label: "Entertainment Law" },
  { value: "healthcare", label: "Healthcare" },
  { value: "international_law", label: "International Law" },
  { value: "military_law", label: "Military Law" },
  { value: "social_security", label: "Social Security" },
  { value: "workers_compensation", label: "Workers Compensation" },
  { value: "other", label: "Other" },
];

const qualifications = [
  { value: "jd_degree", label: "Juris Doctor (JD)" },
  { value: "llb_degree", label: "Bachelor of Laws (LLB)" },
  { value: "llm_degree", label: "Master of Laws (LLM)" },
  { value: "bar_admission", label: "Bar Admission" },
  { value: "phd_law", label: "PhD in Law" },
  { value: "certified_mediator", label: "Certified Mediator" },
  { value: "certified_arbitrator", label: "Certified Arbitrator" },
  { value: "legal_analyst", label: "Certified Legal Analyst" },
  { value: "compliance_specialist", label: "Certified Compliance Specialist" },
  { value: "trial_lawyer", label: "Certified Trial Lawyer" },
];

const formSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(1, "Name is required").trim(),
  firstName: z.string({ required_error: "First name is required" }).min(1, "First name is required").trim(),
  lastName: z.string({ required_error: "Last name is required" }).min(1, "Last name is required").trim(),
  username: z.string({ required_error: "Username is required" }).min(1, "Username is required").trim(),
  email: z.string({ required_error: "Email is required" }).min(1, "Email is required").email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirmation: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  qualification: z.string({ required_error: "Qualification is required" }).min(1, "Qualifications is required").trim(),
  specialization: z.string({ required_error: "Specialization is required" }).min(1, "Specialization is required").trim(),
  experience: z.string({ required_error: "Experience is required" }).min(1, "Experience is required").trim(),
  documents: z.any().refine((files) => files.length > 0, "At least one document is required"),
  accept: z
    .boolean({
      required_error: "Accept the terms and conditions to use LegalEase",
    })
    .default(false)
    .refine((val) => val === true, {
      message: "Accept the terms and conditions to use LegalEase",
    }),
});

export default function SignupForm(): React.JSX.Element {
  const query = useSearchParams();
  const role = query.get("role");
  console.log(role);
  const validatedRole = typeof role === "string" && (role === "user" || role === "lawyer") ? role : "user";
  const [userType, setUserType] = useState<"user" | "lawyer">(validatedRole);
  const [error, setError] = useState("");
  const [pwdInputType, setPwdInputType] = useState<"password" | "text">("password");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      name: "",
      qualification: "",
      specialization: "",
      experience: "",
      documents: [],
      username: "",
      passwordConfirmation: "",
      accept: false,
    },
  });

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey || e.metaKey) {
      setPwdInputType("text");
    }
  };

  const keyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setPwdInputType("password");
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setLoading(true);
    console.log(values);
    //   try {
    //     const res = await axios.post("/auth/login", values);
    //     if (res.status === 200) {
    //       await signIn("credentials", {
    //         ...values,
    //         redirect: true,
    //         redirectTo: "/dashboard",
    //       });

    //       toast.success("Successfully login!");
    //       setLoading(false);
    //     }
    //     setLoading(false);
    //   } catch (err: Error | AxiosError | any) {
    //     if (err.response && err.response.status > 400) {
    //       setError(err.response.data.error);
    //     }
    //     setLoading(false);
    //   }
  }

  return (
    <Form {...form}>
      <form className="space-y-5 max-w-md sm:max-w-md py-10 w-full px-6 rounded-lg mx-auto fade-in-30">
        <div>
          <h2 className="text-3xl text-center text-primary-blue48 font-lilita mt-20">CREATE YOUR ACCOUNT</h2>
          <p className="mt-0 text-center text-primary-dark32 italic font-normal text-sm">Signup to get a LegalEase profile</p>
          <div className="flex gap-2 p-1 rounded-md bg-white border border-primary-orange61 mt-4">
            {userTypes.map((user, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setUserType(user)}
                className={cn(
                  "w-full capitalize px-4 py-2 text-sm rounded-md duration-300",
                  userType == user ? "bg-primary-orange61 text-white" : "bg-transparent text-primary-dark32"
                )}>
                {user}
              </button>
            ))}
          </div>
        </div>
        {!!error && (
          <div className="relative w-full rounded-lg border px-4 py-3 text-sm border-destructive/50 text-destructive flex items-center gap-2">
            <TbAlertCircle className="size-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}
        {userType == "user" ? (
          <>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-dark32/80 font-normal">First name</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Your name"
                      {...field}
                      className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-dark32/80 font-normal">Last name</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Your family name"
                      {...field}
                      className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-dark32/80 font-normal">Username</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Your display name"
                      {...field}
                      className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-dark32/80 font-normal">Name</FormLabel>
                <FormControl>
                  <input
                    placeholder="e.g. John Doe"
                    {...field}
                    className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-dark32/80 font-normal">Email</FormLabel>
              <FormControl>
                <input
                  placeholder="e.g. email@example.com"
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-dark32/80 font-normal">Password</FormLabel>
              <FormControl>
                <input
                  type={pwdInputType}
                  placeholder="******"
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                  onKeyDown={keyDownHandler}
                  onKeyUp={keyUpHandler}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-dark32/80 font-normal">Confirm your password</FormLabel>
              <FormControl>
                <input
                  type={pwdInputType}
                  placeholder="******"
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                  onKeyDown={keyDownHandler}
                  onKeyUp={keyUpHandler}
                />
              </FormControl>
              <p className="text-xs text-primary-dark1E/60">Hold Ctrl to display your password temporarily.</p>
              <FormMessage />
            </FormItem>
          )}
        />
        {userType === "lawyer" ? (
          <>
            <FormField
              control={form.control}
              name="qualification"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-dark32/80 font-normal">Qualifications</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a qualification" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {qualifications.map((qualification) => (
                        <SelectItem key={qualification.value} value={qualification.value}>
                          {qualification.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-dark32/80 font-normal">Specialization</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a specialization" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {specializations.map((specialization) => (
                        <SelectItem key={specialization.value} value={specialization.value}>
                          {specialization.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-dark32/80 font-semibold">Experience:</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Describe your experience"
                      {...field}
                      className="w-full h-32 py-2 resize-none rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="documents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-dark32/80 font-semibold">Documents:</FormLabel>
                  <FormControl>
                    <input type="file" multiple {...field} className="w-full px-3 py-2 border rounded-md border border-primary-dark32/70" placeholder="Upload your documents" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : (
          <></>
        )}
        <FormField
          control={form.control}
          name="accept"
          render={({ field }) => (
            <FormItem className="rounded-md border p-4">
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-primary-dark32/80 font-medium">Accept terms and conditions</FormLabel>
                  <FormDescription className="text-primary-dark32/80 font-light">
                    By creating an account, you agree to{" "}
                    <Link href="#" className="underline decoration-primary-dark1E/20 hover:decoration-primary-dark32 font-medium duration-300">
                      Terms of Services
                    </Link>
                    . We&#39;ll occassionally send account related emails.
                  </FormDescription>
                </div>
              </FormItem>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={form.handleSubmit(onSubmit)}
            className="w-full px-4 py-2 text-white text-sm bg-primary-orange61/85 rounded-md hover:bg-primary-orange61 duration-300">
            {loading ? "Loading..." : "Signup"}
          </button>
        </div>
        <div className="font-inria">
          <div className="flex items-center my-10">
            <hr className="w-full" />
            <p className="w-full text-center text-primary-dark32/80 text-sm font-normal mx-2">or continue with</p>
            <hr className="w-full" />
          </div>
          <div className="grid gap-2 grid-cols-2">
            <button className="flex items-center justify-center w-full px-4 py-2 text-primary-blue48 text-sm rounded-md border hover:text-primary-orange61 border-primary-orange61 bg-transparent duration-300">
              <FcGoogle className="mr-2" /> <span>Google</span>
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2 text-primary-blue48 text-sm rounded-md border hover:text-primary-orange61 border-primary-orange61 bg-transparent duration-300">
              <FaLinkedinIn className="mr-2" /> <span>LinkedIn</span>
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2 text-primary-blue48 text-sm rounded-md border hover:text-primary-orange61 border-primary-orange61 bg-transparent duration-300">
              <FaFacebookF className="mr-2" /> <span>Facebook</span>
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2 text-primary-blue48 text-sm rounded-md border hover:text-primary-orange61 border-primary-orange61 bg-transparent duration-300">
              <FaTwitter className="mr-2" /> <span>Twitter</span>
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
}
