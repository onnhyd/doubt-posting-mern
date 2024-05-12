/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0I3lvxUe5nP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import {
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from "@/components/ui/card";

export default function Component() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
				<div className="flex items-center">
					<Link className="flex items-center gap-2" href="#">
						<CodeIcon className="h-6 w-6" />
						<span className="text-lg font-bold">Doubt Sharing</span>
					</Link>
				</div>
				<nav className="hidden md:flex items-center gap-6">
					<Link className="hover:underline" href="#">
						Home
					</Link>
					<Link className="hover:underline" href="#">
						Doubts
					</Link>
					<Link className="hover:underline" href="#">
						Ask a Doubt
					</Link>
					<Link className="hover:underline" href="#">
						Profile
					</Link>
				</nav>
				<Button className="md:hidden" size="sm" variant="outline">
					<MenuIcon className="h-5 w-5" />
				</Button>
			</header>
			<main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 p-8">
				<div>
					<form className="bg-white rounded-lg shadow-md p-6 space-y-4">
						<div className="space-y-2">
							<Label htmlFor="title">Title</Label>
							<Input id="title" placeholder="Enter the title of your doubt" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="url">LeetCode/GitHub URL</Label>
							<Input
								id="url"
								placeholder="Enter the URL to your LeetCode/GitHub repo"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="video">YouTube Video URL (optional)</Label>
							<Input
								id="video"
								placeholder="Enter the URL to your YouTube video"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="code">Code Snippet</Label>
							<Textarea
								id="code"
								placeholder="Paste your code snippet here"
								rows={6}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="images">Images/Screenshots (optional)</Label>
						</div>
						<Button className="w-full" type="submit">
							Post Doubt
						</Button>
					</form>
					<div className="mt-8 space-y-4">
						<Card>
							<CardHeader>
								<div className="flex items-center gap-3">
									<img
										alt="User Avatar"
										className="rounded-full"
										height={40}
										src="/placeholder.svg"
										style={{
											aspectRatio: "40/40",
											objectFit: "cover",
										}}
										width={40}
									/>
									<div>
										<div className="font-medium">John Doe</div>
										<div className="text-gray-500 text-sm">@johndoe</div>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									<h3 className="text-lg font-medium">
										<Link href="#">
											Trouble with binary search in LeetCode problem
										</Link>
									</h3>
									<div className="flex items-center gap-2">
										<Link
											className="text-gray-500 hover:text-gray-700"
											href="#"
										>
											<LinkIcon className="h-4 w-4" />
											https://leetcode.com/problems/search-in-rotated-sorted-array
										</Link>
										<Link
											className="text-gray-500 hover:text-gray-700"
											href="#"
										>
											<YoutubeIcon className="h-4 w-4" />
											https://www.youtube.com/watch?v=id12345
										</Link>
									</div>
									<pre className="bg-gray-100 p-4 rounded-md">
										<code>
											{`
                  function search(nums, target) {
                    let left = 0;
                    let right = nums.length - 1;
                  
                    while (left <= right) {
                      const mid = Math.floor((left + right) / 2);
                      if (nums[mid] === target) {
                        return mid;
                      } else if (nums[left] <= nums[mid]) {
                        if (nums[left] <= target && target < nums[mid]) {
                          right = mid - 1;
                        } else {
                          left = mid + 1;
                        }
                      } else {
                        if (nums[mid] < target && target <= nums[right]) {
                          left = mid + 1;
                        } else {
                          right = mid - 1;
                        }
                      }
                    }
                  
                    return -1;
                  }
                                      `}
										</code>
									</pre>
									<div className="flex gap-2">
										<img
											alt="Screenshot"
											className="rounded-md"
											height={150}
											src="/placeholder.svg"
											style={{
												aspectRatio: "200/150",
												objectFit: "cover",
											}}
											width={200}
										/>
										<img
											alt="Screenshot"
											className="rounded-md"
											height={150}
											src="/placeholder.svg"
											style={{
												aspectRatio: "200/150",
												objectFit: "cover",
											}}
											width={200}
										/>
									</div>
								</div>
							</CardContent>
							<CardFooter className="flex items-center justify-between">
								<div className="flex items-center gap-2 text-gray-500">
									<Button size="icon" variant="ghost">
										<ThumbsUpIcon className="h-5 w-5" />
									</Button>
									<span>10</span>
									<Button size="icon" variant="ghost">
										<ThumbsDownIcon className="h-5 w-5" />
									</Button>
									<span>2</span>
									<Button size="icon" variant="ghost">
										<MessageCircleIcon className="h-5 w-5" />
									</Button>
									<span>5</span>
								</div>
								<div className="text-gray-500 text-sm">Posted 2 days ago</div>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<div className="flex items-center gap-3">
									<img
										alt="User Avatar"
										className="rounded-full"
										height={40}
										src="/placeholder.svg"
										style={{
											aspectRatio: "40/40",
											objectFit: "cover",
										}}
										width={40}
									/>
									<div>
										<div className="font-medium">Jane Smith</div>
										<div className="text-gray-500 text-sm">@janesmith</div>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									<h3 className="text-lg font-medium">
										<Link href="#">
											Optimizing a React component for performance
										</Link>
									</h3>
									<div className="flex items-center gap-2">
										<Link
											className="text-gray-500 hover:text-gray-700"
											href="#"
										>
											<LinkIcon className="h-4 w-4" />
											https://github.com/username/repo
										</Link>
										<Link
											className="text-gray-500 hover:text-gray-700"
											href="#"
										>
											<YoutubeIcon className="h-4 w-4" />
											https://www.youtube.com/watch?v=id12345
										</Link>
									</div>
									<pre className="bg-gray-100 p-4 rounded-md">
										<code>
											{`
                  
                  const MyComponent = ({ data }) => {
                    const memoizedData = useMemo(() => data.map(item => item.value), [data]);
                  
                    return (
                      <div>
                        {memoizedData.map((value, index) => (
                          <div key={index}>{value}</div>
                        ))}
                      </div>
                    );
                  };
                  
                                      `}
										</code>
									</pre>
									<div className="flex gap-2">
										<img
											alt="Screenshot"
											className="rounded-md"
											height={150}
											src="/placeholder.svg"
											style={{
												aspectRatio: "200/150",
												objectFit: "cover",
											}}
											width={200}
										/>
									</div>
								</div>
							</CardContent>
							<CardFooter className="flex items-center justify-between">
								<div className="flex items-center gap-2 text-gray-500">
									<Button size="icon" variant="ghost">
										<ThumbsUpIcon className="h-5 w-5" />
									</Button>
									<span>15</span>
									<Button size="icon" variant="ghost">
										<ThumbsDownIcon className="h-5 w-5" />
									</Button>
									<span>1</span>
									<Button size="icon" variant="ghost">
										<MessageCircleIcon className="h-5 w-5" />
									</Button>
									<span>8</span>
								</div>
								<div className="text-gray-500 text-sm">Posted 5 days ago</div>
							</CardFooter>
						</Card>
					</div>
				</div>
				<div className="bg-white rounded-lg shadow-md p-6 space-y-4">
					<div className="flex items-center gap-3">
						<img
							alt="User Avatar"
							className="rounded-full"
							height={50}
							src="/placeholder.svg"
							style={{
								aspectRatio: "50/50",
								objectFit: "cover",
							}}
							width={50}
						/>
						<div>
							<div className="font-medium">John Doe</div>
							<div className="text-gray-500 text-sm">@johndoe</div>
						</div>
					</div>
					<div className="space-y-2">
						<h3 className="text-lg font-medium">Your Profile</h3>
						<div className="flex items-center gap-2 text-gray-500">
							<BookmarkIcon className="h-5 w-5" />
							<span>10 Doubts Posted</span>
						</div>
						<div className="flex items-center gap-2 text-gray-500">
							<ThumbsUpIcon className="h-5 w-5" />
							<span>50 Upvotes</span>
						</div>
						<div className="flex items-center gap-2 text-gray-500">
							<MessageCircleIcon className="h-5 w-5" />
							<span>25 Comments</span>
						</div>
					</div>
					<div className="space-y-2">
						<h3 className="text-lg font-medium">Trending Doubts</h3>
						<div className="space-y-2">
							<Link
								className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
								href="#"
							>
								<CodeIcon className="h-5 w-5" />
								<span>Trouble with binary search in LeetCode problem</span>
							</Link>
							<Link
								className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
								href="#"
							>
								<CodeIcon className="h-5 w-5" />
								<span>Optimizing a React component for performance</span>
							</Link>
							<Link
								className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
								href="#"
							>
								<CodeIcon className="h-5 w-5" />
								<span>
									Implementing a custom debounce function in JavaScript
								</span>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

function BookmarkIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
		</svg>
	);
}

function CodeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />
		</svg>
	);
}

function LinkIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
			<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
		</svg>
	);
}

function MenuIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function MessageCircleIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
		</svg>
	);
}

function ThumbsDownIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M17 14V2" />
			<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
		</svg>
	);
}

function ThumbsUpIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M7 10v12" />
			<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
		</svg>
	);
}

function YoutubeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
			<path d="m10 15 5-3-5-3z" />
		</svg>
	);
}
