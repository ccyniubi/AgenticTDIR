# AgenticTDIR: Task-Driven Image Restoration with Test-Time Generalization under Composite Degradations

<p align="center">
  <a href="https://huggingface.co/spaces/CHICHIYU/AgenticTDIR">
    <img src="https://img.shields.io/badge/🤗%20Hugging%20Face-Interactive%20Demo-yellow">
  </a>
  <img src="https://img.shields.io/badge/Status-Under%20Review-blue">
</p>

**AgenticTDIR** is an agentic framework for **Task-Driven Image Restoration (TDIR)** under unknown composite degradations.

Instead of using a fixed feed-forward restoration mapping, AgenticTDIR performs restoration as a **sequential decision process**. At each step, a lightweight policy proposes restoration experts, a reference-free task-utility estimator verifies their effects on the frozen downstream model, and an adaptive controller performs acceptance, rejection, rollback, or termination.

The framework is evaluated on **image classification, object detection, and semantic segmentation**, targeting test-time generalization to unseen degradation compositions and unseen datasets.

## 🚧 Code Release

This paper is currently **under review**.

The source code, pretrained models, and complete reproduction instructions will be released after the review process is completed.

## 🤗 Interactive Demo

Try AgenticTDIR directly through our Hugging Face Space:

### **[▶ Launch AgenticTDIR Interactive Demo](https://huggingface.co/spaces/CHICHIYU/AgenticTDIR)**
