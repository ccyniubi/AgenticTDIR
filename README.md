<p align="center">
  <img src="./AgenticTDIR_logo.png" alt="AgenticTDIR Logo" width="130">
</p>

<h1 align="center">AgenticTDIR: Task-Driven Image Restoration with Test-Time Generalization under Composite Degradations</h1>

<p align="center">
  <a href="https://huggingface.co/spaces/CHICHIYU/AgenticTDIR">
    <img src="https://img.shields.io/badge/🤗%20Hugging%20Face-Interactive%20Demo-yellow" alt="Hugging Face Demo">
  </a>
  <img src="https://img.shields.io/badge/Status-Under%20Review-blue" alt="Status: Under Review">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=CHICHIYU.AgenticTDIR&left_text=Visitors" alt="Page Visitors">
</p>

**AgenticTDIR** is an agentic framework for **Task-Driven Image Restoration (TDIR)** under unknown composite degradations.

Instead of using a fixed feed-forward restoration mapping, AgenticTDIR performs restoration as a **sequential decision process**. At each step, a lightweight policy proposes restoration experts, a reference-free task-utility estimator verifies their effects on the frozen downstream model, and an adaptive controller performs acceptance, rejection, rollback, or termination.

The framework is evaluated on **image classification, object detection, and semantic segmentation**, targeting test-time generalization to unseen degradation compositions and unseen datasets.


## 🎬 Demo Video (English)

A demonstration of the AgenticTDIR restoration process is available below.

https://github.com/user-attachments/assets/f85b5aea-00f9-4736-85b7-b5bdf9db5fce

## 🎬 Demo Video (Chinese)

AgenticTDIR 的演示视频如下


Uploading AgenticTDIR_Chinese_GitHub_under10MB.mp4…




## 🤗 Interactive Demo

Try AgenticTDIR directly through our Hugging Face Space:

### **[▶ Launch AgenticTDIR Interactive Demo](https://huggingface.co/spaces/CHICHIYU/AgenticTDIR)**

## 🚧 Code Release

This paper is currently **under review**.

The source code, pretrained models, and complete reproduction instructions will be released after the review process is completed.
