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
          <a href="/" class="text-white/90 hover:text-white transition-colors">Home</a>
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
      <h1 class="text-5xl md:text-6xl font-black tracking-tight mb-8">
        The Story Behind Task Raver
      </h1>
      <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-left">
        <p class="text-xl md:text-2xl mb-8 leading-relaxed">
          Hi, I'm Karl, and I've always struggled with staying focused on everyday tasks. Whether it was cleaning the house, doing laundry, or even just making dinner, my mind would wander, and I'd find myself getting distracted or forgetting what I was supposed to be doing.
        </p>
        <p class="text-xl md:text-2xl mb-8 leading-relaxed">
          But I discovered something interesting about myself: when I made up little songs about what I was doing, I could stay on task much better. The rhythm and melody would keep me engaged, and the lyrics would literally remind me of what I needed to do next. It was like having a personal cheerleader in my head, but one that actually helped me get things done.
        </p>
        <p class="text-xl md:text-2xl mb-8 leading-relaxed">
          This personal hack became the inspiration for Task Raver. I thought, "What if we could make this experience available to everyone? What if we could turn the mundane into something musical and fun?"
        </p>
      </div>
    </div>
  </div>

  <!-- Mission Section -->
  <div class="bg-white text-gray-900 py-24">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="bg-purple-50 p-8 md:p-12 rounded-xl border-4 border-purple-200 shadow-[8px_8px_0px_0px_rgba(147,51,234,0.1)]">
          <h2 class="text-3xl md:text-4xl font-black mb-8 text-purple-900">Our Mission</h2>
          <p class="text-xl mb-8 text-gray-700">
            Task Raver isn't just for people with ADHD or focus issues – it's for anyone who wants to make their daily tasks more engaging and enjoyable. It's for the person who wants to dance while they do the dishes, or sing along while they organize their workspace. It's for anyone who believes that productivity doesn't have to be boring.
          </p>
          <p class="text-xl mb-8 text-gray-700">
            Our AI-powered system takes your tasks and transforms them into personalized musical experiences. Each task gets its own rhythm, its own vibe, and its own lyrics that keep you on track. It's like having a personal DJ for your to-do list.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Vision Section -->
  <div class="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-24">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-black mb-10 tracking-tight">Our Vision</h2>
        <p class="text-2xl mb-8 font-medium">
          I created Task Raver because I believe that getting things done shouldn't feel like a chore. It should feel like a dance, a celebration of progress, a musical journey through your day.
        </p>
        <p class="text-2xl mb-8 font-medium">
          Whether you're tackling a mountain of laundry or working through a complex project, Task Raver turns your tasks into a soundtrack for success.
        </p>
        <div class="mt-12">
          <button class="bg-white text-purple-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-purple-100 transition-all duration-300 border-4 border-purple-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1">
            Join the Movement
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Signature Section -->
  <div class="bg-white text-gray-900 py-24">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <p class="text-3xl font-black text-purple-900 mb-4">
          Join me in making productivity fun again.
        </p>
        <p class="text-2xl font-medium text-gray-700 mb-8">
          Let's dance through our tasks together.
        </p>
        <p class="text-xl font-bold text-purple-600">
          — Karl
        </p>
      </div>
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
            <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
            <li><a href="#features" class="hover:text-white transition-colors">Features</a></li>
            <li><a href="#pricing" class="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="/about" class="hover:text-white transition-colors">About</a></li>
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