import React, { useState } from "react";
import CryptoJS from "crypto-js";

const LoginSignUpPage: React.FC = () => {
    const [mode, setMode] = useState<"login" | "signup">("login");
    const [method, setMethod] = useState<"email" | "phone" | "google">("email");
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        otp: "",
    });
    const [otpSent, setOtpSent] = useState(false);
    const [forgotMode, setForgotMode] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (forgotMode) {
            if (method === "email") {
                alert("Password reset link sent to your email.");
            } else if (method === "phone") {
                setOtpSent(true);
                alert("OTP sent to your phone.");
            }
            return;
        }
        if (mode === "signup" && method === "email" && form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        if (method === "google") {
            alert("Google OAuth flow would start here.");
            return;
        }
        if (method === "phone") {
            if (!otpSent) {
                setOtpSent(true);
                alert("OTP sent to your phone.");
                return;
            }
            if (form.otp !== "123456") {
                alert("Invalid OTP");
                return;
            }
        }
        // Hash password before sending (demo only)
        const hashedPassword = form.password ? CryptoJS.SHA256(form.password).toString() : "";
        if (mode === "login") {
            if (method === "email") {
                console.log("Logging in with", form.email, hashedPassword);
            } else if (method === "phone") {
                console.log("Logging in with phone", form.phone);
            }
        } else {
            if (method === "email") {
                console.log("Registering user:", { ...form, password: hashedPassword });
            } else if (method === "phone") {
                console.log("Registering user with phone:", form.phone);
            }
        }
        alert(`${mode === "login" ? "Logged in" : "Registered"} successfully!`);
        setForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            otp: "",
        });
        setOtpSent(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white rounded shadow p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    {forgotMode ? "Reset Password" : mode === "login" ? "Login to Your Account" : "Create an Account"}
                </h1>

                {/* Method Switcher */}
                <div className="flex justify-center gap-2 mb-6">
                    <button type="button" className={`px-3 py-1 rounded ${method === "email" ? "bg-blue-600 text-white" : "bg-gray-200"}`} onClick={() => setMethod("email")}>Email</button>
                    <button type="button" className={`px-3 py-1 rounded ${method === "phone" ? "bg-blue-600 text-white" : "bg-gray-200"}`} onClick={() => setMethod("phone")}>Phone OTP</button>
                    <button type="button" className={`px-3 py-1 rounded ${method === "google" ? "bg-blue-600 text-white" : "bg-gray-200"}`} onClick={() => setMethod("google")}>Google</button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Login/Signup */}
                    {method === "email" && !forgotMode && (
                        <>
                            {mode === "signup" && (
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border p-2 rounded"
                                />
                            )}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border p-2 rounded"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                className="w-full border p-2 rounded"
                            />
                            {mode === "signup" && (
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="w-full border p-2 rounded"
                                />
                            )}
                        </>
                    )}

                    {/* Phone OTP Login/Signup */}
                    {method === "phone" && !forgotMode && (
                        <>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                className="w-full border p-2 rounded"
                            />
                            {otpSent && (
                                <input
                                    type="text"
                                    name="otp"
                                    placeholder="Enter OTP"
                                    value={form.otp}
                                    onChange={handleChange}
                                    required
                                    className="w-full border p-2 rounded"
                                />
                            )}
                        </>
                    )}

                    {/* Google Login/Signup */}
                    {method === "google" && !forgotMode && (
                        <div className="flex flex-col items-center">
                            <button type="button" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 mb-2" onClick={handleSubmit}>
                                Continue with Google
                            </button>
                            <span className="text-xs text-gray-500">Demo only: No real OAuth</span>
                        </div>
                    )}

                    {/* Forgot Password/OTP Reset */}
                    {forgotMode && (
                        <>
                            {method === "email" && (
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border p-2 rounded"
                                />
                            )}
                            {method === "phone" && (
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full border p-2 rounded"
                                />
                            )}
                            {method === "phone" && otpSent && (
                                <input
                                    type="text"
                                    name="otp"
                                    placeholder="Enter OTP"
                                    value={form.otp}
                                    onChange={handleChange}
                                    required
                                    className="w-full border p-2 rounded"
                                />
                            )}
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-black text-white p-2 rounded hover:bg-gray-900"
                    >
                        {forgotMode ? (method === "phone" && !otpSent ? "Send OTP" : method === "email" ? "Send Reset Link" : "Reset") : mode === "login" ? "Login" : "Sign Up"}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    {!forgotMode && (
                        <>
                            {mode === "login" ? (
                                <>
                                    Don’t have an account?{" "}
                                    <button onClick={() => setMode("signup")} className="text-blue-600 hover:underline">Sign Up</button>
                                    <br />
                                    <button onClick={() => setForgotMode(true)} className="text-blue-600 hover:underline mt-2">Forgot Password?</button>
                                </>
                            ) : (
                                <>
                                    Already have an account?{" "}
                                    <button onClick={() => setMode("login")} className="text-blue-600 hover:underline">Login</button>
                                </>
                            )}
                        </>
                    )}
                    {forgotMode && (
                        <button onClick={() => { setForgotMode(false); setOtpSent(false); }} className="text-blue-600 hover:underline">Back to Login</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginSignUpPage;

