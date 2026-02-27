import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/Components/ui/button";

import { Field, FieldError, FieldLabel } from "@/Components/ui/field";
import { Input } from "@/Components/ui/input";

const formSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(10, { error: "The password must be at least 10 characters." }),
  remember: z.boolean().optional().default(false),
});

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = (data) => {
    toast.success("Login successful!");
    console.log(data);
  };

  return (
    <form className="space-y-4 w-96" onSubmit={form.handleSubmit(onSubmit)}>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to login to your account.
        </p>
      </div>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Email</FieldLabel>
            <Input
              {...field}
              id="form-rhf-demo-email"
              aria-invalid={fieldState.invalid}
              placeholder="Email.."
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Password</FieldLabel>
            <Input
              {...field}
              type="password"
              aria-invalid={fieldState.invalid}
              placeholder="password.."
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
      name="remember"
      control={form.control}
      render={({ field }) => (
      <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="remember"
        checked={field.value}
        onChange={(e) => field.onChange(e.target.checked)}
        className="h-4 w-4"
      />
      <label htmlFor="remember" className="text-sm">
        Remember me
      </label>
    </div>
  )}
/>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
