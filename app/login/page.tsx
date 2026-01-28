import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-semibold text-[#313d46] mb-4">
                  Client Portal Login
                </h1>
                <p className="text-lg text-[#393f41]">
                  Access your account to view financial statements, reports, and more.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#313d46] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a41a34] focus:border-transparent outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-[#313d46] mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a41a34] focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        className="h-4 w-4 text-[#a41a34] focus:ring-[#a41a34] border-gray-300 rounded"
                      />
                      <label htmlFor="remember" className="ml-2 block text-sm text-[#393f41]">
                        Remember me
                      </label>
                    </div>
                    <a href="/forgot-password" className="text-sm text-[#a41a34] hover:text-[#8b1528] font-semibold">
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#a41a34] text-white px-6 py-3 rounded-[30px] font-semibold text-lg hover:bg-[#8b1528] transition-colors cursor-pointer"
                  >
                    Sign In
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-sm text-[#393f41]">
                    Need help?{' '}
                    <a href="mailto:info@numeriqtaxandaccounting.com" className="text-[#a41a34] hover:text-[#8b1528] font-semibold">
                      Contact Support
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
