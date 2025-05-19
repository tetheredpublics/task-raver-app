<script lang="ts">
  // Main app color - purple
  const primaryColor = 'bg-purple-600';
  const primaryLight = 'bg-purple-100';
  const primaryDark = 'bg-purple-800';
</script>

<main class="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 text-white">
  <!-- Navigation Bar -->
  <nav class="bg-white/10 backdrop-blur-md border-b border-white/20">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center gap-2">
          <img src="/logo/logo-web@0.5x.png" alt="Task Raver Logo" class="h-8 w-auto" />
          <span class="text-xl font-bold">Task Raver</span>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#features" class="text-white/90 hover:text-white transition-colors">Features</a>
          <a href="#pricing" class="text-white/90 hover:text-white transition-colors">Pricing</a>
          <a href="/about" class="text-white/90 hover:text-white transition-colors">About</a>
        </div>

        <!-- CTA Buttons -->
        <div class="flex items-center gap-4">
          <button class="text-white/90 hover:text-white transition-colors">Log in</button>
          <button class="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <div class="container mx-auto px-4 py-20">
    <div class="max-w-4xl mx-auto text-center">
      <div class="flex items-center justify-center gap-4 mb-8">
        <img src="/logo/logo-web.png" alt="Task Raver Logo" class="h-20 w-auto" />
        <h1 class="text-6xl md:text-7xl font-black tracking-tight">
          Task Raver
        </h1>
      </div>
      <p class="text-2xl md:text-3xl mb-12 text-purple-100 font-medium">
        Turn your to-do list into a soundtrack.
      </p>
      <button class="bg-white text-purple-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-purple-100 transition-all duration-300 border-4 border-purple-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2">
        Get Started
      </button>
    </div>
  </div>

  <!-- Features Section -->
  <div class="bg-white text-gray-900 py-24">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <!-- Feature 1 -->
        <div class="bg-purple-50 p-8 rounded-xl border-4 border-purple-200 shadow-[8px_8px_0px_0px_rgba(147,51,234,0.1)] hover:shadow-[4px_4px_0px_0px_rgba(147,51,234,0.1)] transition-all duration-300">
          <div class="text-5xl mb-6">🎯</div>
          <h3 class="text-2xl font-bold mb-4">AI-Powered Task Planning</h3>
          <p class="text-gray-600 text-lg">
            Just tell us what you need to do — our AI breaks it down and schedules it for you.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="bg-purple-50 p-8 rounded-xl border-4 border-purple-200 shadow-[8px_8px_0px_0px_rgba(147,51,234,0.1)] hover:shadow-[4px_4px_0px_0px_rgba(147,51,234,0.1)] transition-all duration-300">
          <div class="text-5xl mb-6">🎵</div>
          <h3 class="text-2xl font-bold mb-4">Music to Move You</h3>
          <p class="text-gray-600 text-lg">
            Dynamic tracks crafted to keep you on task, with lyrics that literally remind you what to do next.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="bg-purple-50 p-8 rounded-xl border-4 border-purple-200 shadow-[8px_8px_0px_0px_rgba(147,51,234,0.1)] hover:shadow-[4px_4px_0px_0px_rgba(147,51,234,0.1)] transition-all duration-300">
          <div class="text-5xl mb-6">🎧</div>
          <h3 class="text-2xl font-bold mb-4">Personalised Task Playlists</h3>
          <p class="text-gray-600 text-lg">
            Your to-do list becomes a playlist — each track designed to match the vibe and rhythm of your tasks.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- USP Section -->
  <div class="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-24">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-black mb-10 tracking-tight">Why We're Different</h2>
        <p class="text-2xl mb-8 font-medium">
          No more boring checklists or silent productivity apps.
        </p>
        <p class="text-2xl mb-8 font-medium">
          This is task management that talks to you, sings to you, and gets you moving.
        </p>
        <p class="text-3xl font-black text-purple-200">
          Because the best way to get things done... is to dance your way through them.
        </p>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="bg-white text-gray-900 py-24">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl md:text-5xl font-black mb-10 tracking-tight">Ready to Dance Through Your Tasks?</h2>
      <button class="bg-purple-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-purple-700 transition-all duration-300 border-4 border-purple-800 shadow-[8px_8px_0px_0px_rgba(147,51,234,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(147,51,234,0.3)] hover:translate-x-1 hover:translate-y-1">
        Start Your Musical Journey
      </button>
    </div>
  </div>

  <!-- Footer Section -->
  <footer class="bg-black text-white py-16">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        <!-- Company Info -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold">Task Raver</h3>
          <p class="text-gray-400">
            Making productivity fun through music and AI.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h4 class="text-lg font-bold">Quick Links</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="space-y-4">
          <h4 class="text-lg font-bold">Legal</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>

        <!-- Social -->
        <div class="space-y-4">
          <h4 class="text-lg font-bold">Connect</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" class="hover:text-white transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Task Raver. All rights reserved.</p>
      </div>
    </div>
  </footer>
</main>
