"use client";

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

// Define the validation schema using Zod
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional(),
})

// Type for the login form data
type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  // Initialize react-hook-form with zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // Handle form submission
  const onSubmit = async (data: LoginFormValues) => {
    try {
      setServerError(null)
      // In a real app, you would call your API here
      console.log("Form submitted:", data)
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // For this example, let's simulate a server error
      // In a real app, you would remove this code and handle actual API responses
      if (data.email === "test@example.com" && data.password === "password123") {
        // Simulate successful login
        window.location.href = "/dashboard"
      } else {
        // Simulate failed login
        setServerError("Invalid email or password. Please try again.")
      }
    } catch (error) {
      setServerError("An unexpected error occurred. Please try again.")
      console.error("Login error:", error)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex justify-center">
        {/* Company Logo Placeholder */}
        <div className="mb-4 text-2xl font-bold">LOGO</div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Sign in to account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Error message space */}
          <div className="min-h-[60px] mb-4">
            {serverError && (
              <div className="p-3 text-sm bg-destructive/10 rounded-md">
                <p className="font-semibold text-destructive">Login Failed</p>
                <p className="text-destructive/90">{serverError}</p>
              </div>
            )}
            {errors.email && (
              <div className="p-3 text-sm bg-destructive/10 rounded-md">
                <p className="font-semibold text-destructive">Email Error</p>
                <p className="text-destructive/90">{errors.email.message}</p>
              </div>
            )}
            {!errors.email && errors.password && (
              <div className="p-3 text-sm bg-destructive/10 rounded-md">
                <p className="font-semibold text-destructive">Password Error</p>
                <p className="text-destructive/90">{errors.password.message}</p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    {...register("email")}
                    className={cn(
                      "pl-10",
                      errors.email && "border-destructive focus-visible:ring-destructive/30 focus-visible:ring-offset-0"
                    )}
                  />
                </div>
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <LockIcon className="h-4 w-4" />
                  </span>
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••" 
                    {...register("password")}
                    className={cn(
                      "pl-10",
                      errors.password && "border-destructive focus-visible:ring-destructive/30 focus-visible:ring-offset-0"
                    )}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" {...register("remember")} />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2Icon className="h-4 w-4 animate-spin" />
                    Signing in...
                  </span>
                ) : (
                  "Sign in"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
