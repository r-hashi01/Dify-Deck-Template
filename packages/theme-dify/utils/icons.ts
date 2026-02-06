// Icon name to SVG mapping using lucide-static
// Supports both kebab-case (git-branch) and PascalCase (GitBranch) names
import {
  Cloud, Lock, GitBranch, BarChart, BarChart2, BarChart3, Zap, Shield, Globe, Database,
  Code, User, Terminal, Server, Layers, CheckCircle, Box, Cpu,
  Users, FileText, BookOpen, AlertCircle, HelpCircle, Info,
  Star, Settings, Heart, MessageCircle, Folder, Search, Calendar,
  Clock, DollarSign, Target, Award, Link, Rocket, TrendingUp,
  Play, Pause, Plus, Minus, X, Menu, ArrowRight, ArrowLeft, ArrowDown, ArrowUp,
  ChevronDown, ChevronUp, ChevronRight, ChevronLeft, ExternalLink, Download, Upload, Trash, ToggleLeft, ToggleRight,
  Edit, Eye, EyeOff, Bell, Mail, Phone, MapPin, Home, Check, Layout,
  Building, Building2, Briefcase, Factory,
  LineChart, PieChart, Activity, AreaChart,
  RefreshCw, RefreshCcw, RotateCw, RotateCcw, Repeat, Repeat1, Recycle,
  MessageSquare, BotMessageSquare, Brain, BrainCircuit, BrainCog,
  FilePen, FileEdit, Workflow, Network, Sparkles, WandSparkles, Bot, Plug,
  Key, Gauge
} from 'lucide-static'

// Build icons map
const icons: Record<string, string> = {
  'cloud': Cloud,
  'lock': Lock,
  'git-branch': GitBranch,
  'bar-chart': BarChart,
  'zap': Zap,
  'shield': Shield,
  'globe': Globe,
  'database': Database,
  'code': Code,
  'user': User,
  'terminal': Terminal,
  'server': Server,
  'layers': Layers,
  'check-circle': CheckCircle,
  'box': Box,
  'cpu': Cpu,
  'users': Users,
  'file-text': FileText,
  'book-open': BookOpen,
  'alert-circle': AlertCircle,
  'help-circle': HelpCircle,
  'info': Info,
  'star': Star,
  'settings': Settings,
  'heart': Heart,
  'message-circle': MessageCircle,
  'folder': Folder,
  'search': Search,
  'calendar': Calendar,
  'clock': Clock,
  'dollar-sign': DollarSign,
  'target': Target,
  'award': Award,
  'link': Link,
  'rocket': Rocket,
  'trending-up': TrendingUp,
  'play': Play,
  'pause': Pause,
  'plus': Plus,
  'minus': Minus,
  'x': X,
  'menu': Menu,
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  'chevron-right': ChevronRight,
  'chevron-left': ChevronLeft,
  'toggle-left': ToggleLeft,
  'toggle-right': ToggleRight,
  'external-link': ExternalLink,
  'download': Download,
  'upload': Upload,
  'trash': Trash,
  'edit': Edit,
  'eye': Eye,
  'eye-off': EyeOff,
  'bell': Bell,
  'mail': Mail,
  'phone': Phone,
  'map-pin': MapPin,
  'home': Home,
  'check': Check,
  'layout': Layout,
  'building': Building,
  'building-2': Building2,
  'briefcase': Briefcase,
  'factory': Factory,
  'line-chart': LineChart,
  'pie-chart': PieChart,
  'activity': Activity,
  'area-chart': AreaChart,
  'bar-chart-2': BarChart2,
  'bar-chart-3': BarChart3,
  'refresh-cw': RefreshCw,
  'refresh-ccw': RefreshCcw,
  'rotate-cw': RotateCw,
  'rotate-ccw': RotateCcw,
  'repeat': Repeat,
  'repeat-1': Repeat1,
  'recycle': Recycle,
  // Dify app type icons
  'message-square': MessageSquare,
  'bot-message-square': BotMessageSquare,
  'brain': Brain,
  'brain-circuit': BrainCircuit,
  'brain-cog': BrainCog,
  'file-pen': FilePen,
  'file-edit': FileEdit,
  'workflow': Workflow,
  'network': Network,
  'sparkles': Sparkles,
  'wand-sparkles': WandSparkles,
  'bot': Bot,
  'plug': Plug,
  'key': Key,
  'gauge': Gauge,
}

// Convert PascalCase to kebab-case
function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// Get SVG string for an icon name
// Supports: "Cloud", "cloud", "git-branch", "GitBranch", "<Cloud />", etc.
export function getIconSvg(iconName: string | undefined): string | null {
  if (!iconName) return null

  // If it's already an SVG string, return as-is
  if (iconName.trim().startsWith('<svg') || iconName.trim().startsWith('<path')) {
    return iconName
  }

  // Clean up JSX-style tags: <Cloud /> -> Cloud
  let cleaned = iconName.replace(/<([A-Za-z-]+)\s*\/?>/, '$1').trim()

  // Convert to kebab-case for lookup
  const key = toKebabCase(cleaned)

  return icons[key] || null
}

// Export the icons map for direct access if needed
export { icons }
